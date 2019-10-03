import React from 'react';
import './movie-card-carousel.scss';
import MovieCard from '../movie-card';

function MovieCardCarousel({ movies }) {
    return (
        <div className="carousel__container">
            {movies.map(movie => (
                <MovieCard movie={movie} key={movie.title} />
            ))}
        </div>
    );
}

export default MovieCardCarousel;
