import React, { useEffect, useState } from 'react';
import './NetflixClone.css';
import MovieCard from '../components/MovieCard';
import MovieDescription from '../components/MovieDescription';

const API_KEY = '543f8cf9f7f6a6104d5f2a14f88ab240'; // Replace with your real key

function NetflixClone() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setMovies(data.results));
  }, []);

  const handleSearch = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`)
      .then(res => res.json())
      .then(data => setMovies(data.results));
  };

  return (
    <div className="netflix-container">
      <h1>Netflix Clone 🍿</h1>
      <div className="search-bar">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search movies..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="movies-grid">
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={() => setSelectedMovie(movie)}
          />
        ))}
      </div>

      {selectedMovie && (
        <MovieDescription
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}

export default NetflixClone;
