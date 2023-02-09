import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./components/MovieCard";
const URL_LINK = "http://www.omdbapi.com?apikey=96c80c7b";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const fetchMovies = async (title) => {
    const response = await fetch(`${URL_LINK}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    fetchMovies("batman");
  }, []);

  return (
    <>
      <div className="app">
        <h1>MoviesHouse</h1>
        <div className="search">
          <input
            placeholder="Search for any movie"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          />
          <img src={SearchIcon} alt="Search" onClick={() => fetchMovies(search)}></img>
        </div>
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movies) => (
            <MovieCard movie={movies} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movie found</h2>
        </div>
      )}
    </>
  );
}

export default App;
