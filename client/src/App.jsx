import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        console.log(data)
      })
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/movies/search/${search}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchResults(data);
        console.log(data)
      })
  }, [search]);

  return (
    <>
      <h1>Movie Data</h1>

      <h2>All Movie Titles</h2>
      <ul>
        {movies.map(movie => <li key={movie.title}>{movie.title}</li>)}
      </ul>

      <form>
        <input type='text' id='movie-search' placeholder='Search for a movie' onChange={() => {
          setSearch(document.querySelector('#movie-search').value);
        }}></input>
      </form>

      <h2>Search Results</h2>
      <ul>
        {(searchResults.length > 0) ? (
          searchResults.map(movie => <li key={movie.title}>{movie.title}</li>)
        ):(
        null
        )}
      </ul>

    </>
  )
}

export default App
