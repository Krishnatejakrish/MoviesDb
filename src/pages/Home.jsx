import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
// import {searchMovies} from "../services/api.js"
import { getPopularMovies, searchMovies } from "../services/api";
import Slideshow from "../components/Slideshow";

import "../css/Home.css";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // getPopularMovies().then(data => setMovies(data.results))
    const loadPopularMovies = async () => {
      try {
        const popularMOvies = await getPopularMovies();
        setMovies(popularMOvies);
      } catch (error) {
        console.error(error);
        setError("failed to load movies");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    // console.log("Search button clicked");
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null); // Clear previous errors
    } catch (error) {
      console.error(error);
      setError("Failed to search for movies");
    } finally {
      setLoading(false);
    }

    setSearchQuery("");
  };

  return (
    <div className="home">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a movie"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {!loading && !error && <Slideshow movies={movies} />}
      {error && <p className="error-message">{error}</p>}

      {loading ? (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
