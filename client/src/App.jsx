import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        console.log(data)
      })
  }, []);

  return (
    <>
      <h1>Movie Data</h1>

      <ul>
        {movies.map(movie => <li key={movie.title}>{movie.title}</li>)}
      </ul>
    </>
  )
}

export default App
