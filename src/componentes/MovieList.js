import React from 'react'
import initialMovies from "./InitialMovies";
import { Movie } from './Movie';

export const MovieList = () => {
  return (
    <div className="container">
    <div className="row">
        {initialMovies.map(movie => (
        <div className="col-md-4" key={movie.id}>
          <h1>{movie.title}</h1>
          <Movie movie={movie}></Movie>
        </div>
     ))}
        </div>
   </div>
  )
}
