import React, { useState, useEffect } from "react";
// import "../css/Slideshow.css";4
import "../css/Slideshow.css"

const Slideshow = ({ movies }) => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  // Slideshow logic to update the current movie index every 2 seconds
  useEffect(() => {
    if (movies.length === 0) return;

    const interval = setInterval(() => {
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [movies]);

  if (movies.length === 0) return <p>No movies to display.</p>;

  const currentMovie = movies[currentMovieIndex];

  return (
    <div className="slideshow">
      <h2>Now Showing</h2>
      <div className="slide-card">
        <img
          src={`https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`}
          alt={currentMovie.title}
        />
        <h3>{currentMovie.title}</h3>
        <p>Release Date: {currentMovie.release_date}</p>
      </div>
    </div>
  );
};

export default Slideshow;
