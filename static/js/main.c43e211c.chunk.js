(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(55)},23:function(e,t,a){},27:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),o=a.n(r),m=a(57),i=a(59),l=a(58),s=a(56),u=(a(23),function(){return c.a.createElement("div",{className:"rmdb-header"},c.a.createElement("div",{className:"rmdb-header-content"},c.a.createElement(s.a,{to:"/"},c.a.createElement("img",{className:"rmdb-logo",src:"./images/reactMovie_logo.png",alt:"rmdb-logo"})),c.a.createElement("img",{className:"rmdb-tmdb-logo",src:"./images/tmdb_logo.png",alt:"tmdb-logo"})))}),d=a(6),h=a(7),v=a(9),g=a(8),p=a(10),b="https://api.themoviedb.org/3/",f="abc7012985dc51340a6add7916d631ca",E="https://image.tmdb.org/t/p/",N=(a(27),function(e){return c.a.createElement("div",{className:"rmdb-navigation"},c.a.createElement("div",{className:"rmdb-navigation-content"},c.a.createElement(s.a,{to:"/react-movie-app/"},c.a.createElement("p",null,"Home")),c.a.createElement("p",null,"/"),c.a.createElement("p",null,e.movie)))}),y=a(5),k=a.n(y),I=(a(30),function(e){return c.a.createElement("div",{className:"rmdb-moviethumb"},e.clickable?c.a.createElement(s.a,{to:{pathname:"/".concat(e.movieId),movieName:"".concat(e.movieName)}},c.a.createElement("img",{src:e.image,alt:"movie-thumb"})):c.a.createElement("img",{src:e.image,alt:"movie-thumb"}))}),_=(a(32),function(e){return c.a.createElement("div",{className:"rmdb-movieinfo",style:{background:e.movie.backdrop_path?"url('".concat(E).concat("w1280").concat(e.movie.backdrop_path,"')"):"#000"}},c.a.createElement("div",{className:"rmdb-movieinfo-content"},c.a.createElement("div",{className:"rmdb-movieinfo-thumb"},c.a.createElement(I,{image:e.movie.poster_path?"".concat(E).concat("w500").concat(e.movie.poster_path):"./images/no_image.jpg",clickable:!1})),c.a.createElement("div",{className:"rmdb-movieinfo-text"},c.a.createElement("h1",null,e.movie.title),c.a.createElement("h3",null,"PLOT"),c.a.createElement("p",null,e.movie.overview),c.a.createElement("h3",null,"IMDB RATING"),c.a.createElement("div",{className:"rmdb-rating"},c.a.createElement("meter",{min:"0",max:"100",optimum:"100",low:"40",high:"70",value:10*e.movie.vote_average}),c.a.createElement("p",{className:"rmdb-score"},e.movie.vote_average)),e.directors.length>1?c.a.createElement("h3",null,"DIRECTORS"):c.a.createElement("h3",null,"DIRECTOR"),e.directors.map(function(e,t){return c.a.createElement("p",{key:t,className:"rmdb-director"},e.name)})),c.a.createElement(k.a,{className:"fa-film",name:"film",size:"2x"})))}),j=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(e)},S=(a(34),function(e){return c.a.createElement("div",{className:"rmdb-movieinfobar"},c.a.createElement("div",{className:"rmdb-movieinfobar-content"},c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(k.a,{className:"fa-time",name:"clock-o",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Running time: ",function(e){var t=Math.floor(e/60),a=e%60;return"".concat(t,"h ").concat(a,"m")}(e.time))),c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(k.a,{className:"fa fa-money",name:"money",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Budget: ",j(e.budget))),c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(k.a,{name:"ticket",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Revenue: ",j(e.revenue)))))}),O=(a(36),function(e){return c.a.createElement("div",{className:"rmdb-grid"},e.header&&!e.loading?c.a.createElement("h1",null,e.header):null,c.a.createElement("div",{className:"rmdb-grid-content"},function(){var t=c.a.Children.map(e.children,function(e,t){return c.a.createElement("div",{key:t,className:"rmdb-grid-element"},e)});return t.pop(),t}()))}),w=(a(38),function(e){return c.a.createElement("div",{className:"rmdb-actor"},c.a.createElement("img",{src:e.actor.profile_path?"".concat(E).concat("w154").concat(e.actor.profile_path):"./images/no_image.jpg",alt:"actorthumb"}),c.a.createElement("span",{className:"rmdb-actor-name"},e.actor.name),c.a.createElement("span",{className:"rmdb-actor-character"},e.actor.character))}),x=(a(40),function(){return c.a.createElement("div",{className:"loader"})}),T=(a(42),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(v.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(c)))).state={movie:null,actors:null,directors:[],loading:!1},a.fetchItems=function(e){fetch(e).then(function(e){return e.json()}).then(function(e){e.status_code?a.setState({loading:!1}):a.setState({movie:e},function(){var e="".concat(b,"movie/").concat(a.props.match.params.movieId,"/credits?api_key=").concat(f,"&language=en-US");fetch(e).then(function(e){return e.json()}).then(function(e){var t=e.crew.filter(function(e){return"Director"===e.job});a.setState({actors:e.cast,directors:t,loading:!1})})})}).catch(function(e){return console.error("Error:",e)})},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.setState({loading:!0});var e="".concat(b,"movie/").concat(this.props.match.params.movieId,"?api_key=").concat(f,"&language=en-US");this.fetchItems(e)}},{key:"render",value:function(){return c.a.createElement("div",{className:"rmdb-movie"},this.state.movie?c.a.createElement("div",null,c.a.createElement(N,{movie:this.props.location.movieName}),c.a.createElement(_,{movie:this.state.movie,directors:this.state.directors}),c.a.createElement(S,{time:this.state.movie.runtime,budget:this.state.movie.budget,revenue:this.state.movie.revenue})):null,this.state.actors?c.a.createElement("div",{className:"rmdb-movie-grid"},c.a.createElement(O,{header:"Actors"},this.state.actors.map(function(e,t){return c.a.createElement(w,{key:t,actor:e})}))):null,this.state.actors||this.state.loading?null:c.a.createElement("h1",null,"No movie found!"),this.state.loading?c.a.createElement(x,null):null)}}]),t}(n.Component)),C=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Whoooops. This page doesn't exist :( ."))},P=a(14),U=(a(44),function(e){return c.a.createElement("div",{className:"rmdb-heroimage",style:{background:"linear-gradient(to bottom, rgba(0,0,0,0)\n        39%, rgba(0,0,0,0)\n        41%, rgba(0,0,0,0.65)\n        100%),\n        url('".concat(e.image,"'), #1c1c1c")}},c.a.createElement("div",{className:"rmdb-heroimage-content"},c.a.createElement("div",{className:"rmdb-heroimage-text"},c.a.createElement("h1",null,e.title),c.a.createElement("p",null,e.text))))}),D=(a(46),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(v.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(c)))).state={value:""},a.timeout=null,a.doSearch=function(e){a.setState({value:e.target.value}),clearTimeout(a.timeout),a.timeout=setTimeout(function(){a.props.callback(a.state.value)},500)},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"rmdb-searchbar"},c.a.createElement("div",{className:"rmdb-searchbar-content"},c.a.createElement(k.a,{className:"rmdb-fa-search",name:"search",size:"2x"}),c.a.createElement("input",{type:"text",className:"rmdb-searchbar-input",placeholder:"Type to search",onChange:this.doSearch,value:this.state.value})))}}]),t}(n.Component)),M=(a(48),function(e){return c.a.createElement("div",{className:"rmdb-loadmorebtn",onClick:e.onClick},c.a.createElement("p",null,e.text))}),R=(a(50),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(v.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(c)))).state={movies:[],heroImage:null,loading:!1,currentPage:0,totalPages:0,searchTerm:""},a.searchItems=function(e){var t="";a.setState({movies:[],loading:!0,searchTerm:e}),t=""===a.searchTerm?"".concat(b,"movie/popular?api_key=").concat(f,"&language=en-US&page=1"):"".concat(b,"search/movie?api_key=").concat(f,"&language=es-US&query=").concat(a.state.searchTerm),a.fetchItems(t)},a.loadMoreItems=function(){var e="";a.setState({loading:!0}),e=""===a.state.searchTerm?"".concat(b,"movie/popular?api_key=").concat(f,"&language=en-US&page=").concat(a.state.currentPage+1):"".concat(b,"search/movie?api_key=").concat(f,"&language=es-US&query=").concat(a.state.searchTerm,"&page=").concat(a.state.currentPage+1),a.fetchItems(e)},a.fetchItems=function(e){fetch(e).then(function(e){return e.json()}).then(function(e){a.setState({movies:Object(P.a)(a.state.movies).concat(Object(P.a)(e.results)),heroImage:a.state.heroImage||e.results[0],loading:!1,currentPage:e.page,totalPages:e.total_pages})})},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.setState({loading:!0});var e="".concat(b,"movie/popular?api_key=").concat(f,"&language=en-US&page=1");this.fetchItems(e)}},{key:"render",value:function(){return c.a.createElement("div",{className:"rmdb-home"},this.state.heroImage?c.a.createElement("div",null,c.a.createElement(U,{image:"".concat(E).concat("w1280").concat(this.state.heroImage.backdrop_path),title:this.state.heroImage.original_title,text:this.state.heroImage.overview}),c.a.createElement(D,{callback:this.searchItems})):null,c.a.createElement("div",{className:"rmdb-home-grid"},c.a.createElement(O,{header:this.state.searchTerm?"Search Result":"Popular Movies",loading:this.state.loading},this.state.movies.map(function(e,t){return c.a.createElement(I,{key:t,clickable:!0,image:e.poster_path?"".concat(E).concat("w500").concat(e.poster_path):"./images/no_image.jpg",movieId:e.id,movieName:e.original_title})}),";"),this.state.loading?c.a.createElement(x,null):null,this.state.currentPage<=this.state.totalPages&&!this.state.loading?c.a.createElement(M,{text:"Load more...",onClick:this.loadMoreItems}):null))}}]),t}(n.Component)),z=function(){return c.a.createElement(m.a,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(u,null),c.a.createElement(i.a,null,c.a.createElement(l.a,{path:"/react-movie-app/",component:R,exact:!0}),c.a.createElement(l.a,{path:"/:movieId",component:T,exact:!0}),c.a.createElement(l.a,{component:C}))))};a(53);o.a.render(c.a.createElement(z,null),document.getElementById("root"))}},[[18,2,1]]]);
//# sourceMappingURL=main.c43e211c.chunk.js.map