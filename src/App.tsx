import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import {IMovie} from './components/movie-card/movie_card';
import GetHeader from './components/header/header';
import GetNavbar from './components/nav-bar/nav_bar';
import {data} from './data/movies_data'
import MovieList from './components/movie-list/movie_list';


function App() {
  const [movies, setMovies] = useState(data)

  function clearMovies() {
    setMovies([])
  }
  function addMovie() {
    setMovies([...movies, data[0]])
  }

  return (
    <React.Fragment>
      <GetHeader header={"Movies Cards"}/>
      <GetNavbar clearMovies={clearMovies} addMovie={addMovie}/>
      <MovieList noDataMessage="No Movies Found" movies={movieAdapter(movies)} />
    </React.Fragment>
  );
}

function movieAdapter(movies: Array<any>): Array<IMovie> {
  return movies.map((movie: any) => {
    const { Title, Year, rank, Poster, imdbID, Type} = movie;
    return { 
      baseAdditionalInfoUrl: "http://imdb.com/title",
      title: Title,
      year: Year,
      poster: Poster,
      type: Type,
      imdbID: imdbID,
      rank: rank
    }
  })
}

export default App;
