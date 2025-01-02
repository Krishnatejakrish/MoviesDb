import React from "react";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import { MovieProvider } from "./contexts/MovieContext";

const App = () => {
  return (
   <MovieProvider>
    <Navbar/>
    <main className="main-content">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
   </main>
   </MovieProvider>
  );
};

export default App;