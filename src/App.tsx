import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import MovieList from './components/MovieList.js';
import MovieListHeading from './components/MovieListHeading.js';
import Favorites from './components/Favorites.js';
import RemoveFavorites from './components/RemoveFavorites.js';
import SearchBox from './components/SearchBox';
import { API_KEY } from './components/secrets';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  params: {
    'api_key': API_KEY,
  },
});

interface moviesTypes {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const App = () => {
  // const [movies, setMovies] = useState: Array<moviesTypes>([]);
  const [movies, setMovies] = useState<moviesTypes[]>([]);
  const [favourites, setFavourites] = useState<moviesTypes[]>([]);

  const getMovieList = async (query: string) => {
    const { data } = await api('search/movie', {
      params: {
        query,
      },
    });
    if (data.results) {
			setMovies(data.results);
		}
    console.log("enter to the fetch");
  };

  const addFavouriteClick = (movie: moviesTypes) => {
    const newFavouriteList: any = [...favourites, movie];
    setFavourites(newFavouriteList);
  };

  const removeFavouriteClick = (movie: moviesTypes) => {
    const newFavouriteList = favourites.filter(favourite => favourite.id !== movie.id);
    setFavourites(newFavouriteList);
  };


  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center my-4">
        <MovieListHeading heading='Mentor App' />
        <SearchBox onChangeGetMovieList={getMovieList} />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          handleFavoutireClick={addFavouriteClick}
          favoriteComponent={Favorites}
        />
      </div>
      <div className="row d-flex align-items-center my-4">
        <MovieListHeading heading='My favorites' />
      </div>
      <div className="row">
        <MovieList
          movies={favourites}
          handleFavoutireClick={removeFavouriteClick}
          favoriteComponent={RemoveFavorites}
        />
      </div>
    </div>
  )
};

export default App;
