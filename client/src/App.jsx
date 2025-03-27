import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { movies } from './movies.js';

function App() {
  const [count, setCount] = useState(0);

  const listItems = movies.map(movie => <li key={movie.title}>{movie.title}</li>);

  return (
    <>
      <h1>Movie Data</h1>

      <ul>
        {listItems}
      </ul>
    </>
  )
}

export default App
