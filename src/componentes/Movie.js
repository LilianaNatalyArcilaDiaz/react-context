import React from 'react'

export const Movie = ({ movie }) => {

  const imgStyles = {
    height: '260px',
    objectFit: 'cover',
  }

  return (
    <div className="card">
      <img src={movie.imageUrl}
        alt={movie.title}
        style={imgStyles} />
      <div className="card-body">
        <h4>{movie.title}</h4>
        <button className="btn btn-success">Favorito</button>
      </div>   
      </div >
  )
}
