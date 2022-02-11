import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // function fetchMoviesHandler() {
  //   fetch('https://swapi.dev/api/films').then(response => {
  //     return response.json();
  //   }).then(data => {
  //     const transformedMovies = data.results.map(movie => {
  //       return {
  //         id: movie.episode_id,
  //         title: movie.title,
  //         openingText: movie.opening_crawl,
  //         releaseDate: movie.release_date,
  //       }
  //     });
  //     setMovies(transformedMovies);
  //   });
  // }

  async function fetchMoviesHandler() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/films');

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const transformedMovies = data.results.map(movie => {
        return {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date,
        }
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  let content;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  } else if (error) {
    content = <p>{error}</p>
  } else if (isLoading) {
    content = <p>Loading...</p>;
  } else {
    content = <p>Found no movies.</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* { !isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        { !isLoading && movies.length === 0 && !error && <p>Found no movies.</p>}
        { !isLoading && error && <p>{error}</p>}
        { isLoading && <p>Loading...</p>} */}
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
