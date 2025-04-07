import React from 'react';
import './MovieDescription.css';

function MovieDescription({ movie, onClose }) {
  return (
    <div className="overlay">
      <div className="modal">
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
export default MovieDescription;