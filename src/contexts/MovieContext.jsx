import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setfavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setfavorites(JSON.parse(storedFavorites));
    }
  },[]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie) => {
    setfavorites((prev) => [...prev, movie]);
  };

  const removeFromFavorites = (movieID) => {
    setfavorites((prev) => prev.filter((item) => item.id !== movieID));
  };

  const isFavorites = (movieID) => {
    return favorites.some((item) => item.id === movieID);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorites,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
