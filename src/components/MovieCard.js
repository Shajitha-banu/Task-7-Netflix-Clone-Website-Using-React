import React from 'react';
import './MovieCard.css';

function MovieCard({ movie, onClick }) {
  const imagePath = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : 'https://via.placeholder.com/300x450?text=No+Image';

  return (
    <div className="movie-card" onClick={onClick}>
      <img src={imagePath} alt={movie.title} />
      <h3>{movie.title}</h3>
    </div>
  );
}

export default MovieCard;
