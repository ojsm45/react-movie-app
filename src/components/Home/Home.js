import React, { Component } from 'react';

import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../../config';

import HeroImage from '../elements/HeroImage/HeroImage';
import SearchBar from '../elements/SearchBar/SearchBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn';
import Spinner from '../elements/Spinner/Spinner';
import './Home.css';

class Home extends Component {
  state = {
    movies: [],
    heroImage: null,
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: ''
  }

  componentDidMount(){
    if (localStorage.getItem('HomeState')){
      const state = JSON.parse(localStorage.getItem('HomeState'));
      this.setState({ ...state });
    } else {
      this.setState({loading: true});
      const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
      this.fetchItems(endpoint);
    }
  };

  searchItems = (searchTerm) => {
    let endpoint = '';
    this.setState({
      movies: [],
      loading: true,
      searchTerm,
    });

    if(searchTerm === ''){
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=es-US&query=${this.state.searchTerm}`
    }
    this.fetchItems(endpoint);
  };

  loadMoreItems = () => {
    let endpoint = '';
    this.setState({ loading: true });

    if(this.state.searchTerm === ''){
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage + 1}`;
    } else{
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=es-US&query=${this.state.searchTerm}&page=${this.state.currentPage + 1}`;
    }
    this.fetchItems(endpoint);
  };

  fetchItems = (endpoint) => {
    fetch( endpoint )
    .then( result => result.json() )
    .then( result => {
      // Here we must have the data in json format
      this.setState({
        // Using ES6 Spread operator to take out array elements 
        movies: [...this.state.movies, ...result.results],
        heroImage: this.state.heroImage || result.results[0],
        loading: false,
        currentPage: result.page,
        totalPages: result.total_pages
      }, () => {
        if (this.state.searchTerm === "")
          localStorage.setItem('HomeState', JSON.stringify(this.state));
      });
    });
  }

  render(){
    // es6 destructuring the state
    const {movies, heroImage, loading, currentPage, totalPages, searchTerm} = this.state;
    return(
      <div className="rmdb-home">
        {/** Ternary Operator*/}
        { heroImage ?
        <div>
          <HeroImage 
            image={ `${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}` }
            title={ heroImage.original_title }
            text={ heroImage.overview }
          />
          <SearchBar callback={ this.searchItems }/>
        </div> : null }
        <div className="rmdb-home-grid">
          <FourColGrid 
            header={ searchTerm ? 'Search Result' : 'Popular Movies' }
            loading={ loading }
            >

            { movies.map( (element, i) => {
              return <MovieThumb 
                        key={i}
                        clickable={true}
                        image={ element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : './images/no_image.jpg' }
                        movieId={element.id}
                        movieName={element.original_title}
                      />
            })};
          </FourColGrid>
          { loading ? <Spinner /> : null }
          {/** To make more that one check use ( ) */}
          {( currentPage <= totalPages && !loading ) ? 
            <LoadMoreBtn 
              text="Load more..."
              onClick={ this.loadMoreItems }
            /> : null }
        </div>
      </div>
    );
  };
};

export default Home;