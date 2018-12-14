import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../elements/Header/Header';
import Movie from '../Movie/Movie';
import NotFound from '../elements/NotFound/NotFound';
import Home from '../Home/Home';

const App = () => {
  return(
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
        <Route path={process.env.PUBLIC_URL + '/'} component={ Home } exact />
        <Route path="/:movieId" component={ Movie } exact />
        <Route component={ NotFound } />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;