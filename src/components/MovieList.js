import React from 'react'

const MovieList = (props) => {
  const FavoriteComponent = props.favoriteComponent;
  return (
    <>
        {props.movies.map((movie, index) => (
            <div key={movie.id} className="image-container d-flex justify-content-start m-3 movie-img-container">
                <img className="movie-img" src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.original_title} />
                <div 
                  className="overlay d-flex justify-content-center align-items-center"
                  onClick={() => props.handleFavoutireClick(movie)}
                >
                  <FavoriteComponent />
                </div>
            </div>
        ))}
    </>
  )
}

export default MovieList