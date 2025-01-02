import React from "react";
import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

const MovieCard = ({ movie }) => {
  const { addToFavorites, removeFromFavorites, isFavorites } = useMovieContext();
  const isFav = isFavorites(movie.id);

  const onFavoriteClick = (e) => {
    e.preventDefault();
    console.log("Button Clicked. Current Favorite State:", isFav);
    if (isFav) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${isFav ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            ❤️
          </button>
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
