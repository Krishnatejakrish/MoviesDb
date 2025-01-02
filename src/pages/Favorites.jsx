import React from "react";
import "../css/Favorite.css";
import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
  const { favorites } = useMovieContext();

  if (favorites){
    return (
      <div className="favorites">
        <h1>Favorite Movies</h1>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <main className="favorites-conatiner">
      <div className="favorites-empty">
        <h2>No Favorite movies added yet</h2>
        <p>
          Get started by adding some movies to your favorites and they will
          appear here
        </p>
      </div>


      
    </main>
  );
};

export default Favorites;
