const API_KEY = "c71e602d20120dbf0b07a31f541f1299";
const API_URL = "https://api.themoviedb.org/3";

const getPopularMovies = async () => {
  const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`);
  
  if (!response.ok) {
    throw new Error(`Error fetching popular movies: ${response.statusText}`);
  }
  
  const data = await response.json();
  console.log(data);
  return data.results;
};

const searchMovies = async (query) => {
  const response = await fetch(
    `${API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  
  if (!response.ok) {
    throw new Error(`Error searching for movies: ${response.statusText}`);
  }
  
  const data = await response.json();
  console.log(data);
  return data.results;
};

export {
  getPopularMovies,
  searchMovies,
};
