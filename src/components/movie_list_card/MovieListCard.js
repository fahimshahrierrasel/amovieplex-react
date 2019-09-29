import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function MovieListCard({ movie }) {
  return (
    <div className="movie-list__card">
      <div className="movie-list__card-image">
        <img src={movie.image} alt="" />
      </div>
      <div className="movie-list__card-details">
        <Link className="movie__title" to={"/movie"}>
          {movie.title}
        </Link>
        <p className="movie__desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos optio
          sint voluptatibus ipsa, neque minus similique velit nemo vitae illo at
          deserunt voluptatum enim, laboriosam ab. Nesciunt, doloribus ea!
          Minima. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
          optio sint voluptatibus ipsa, neque minus similique velit nemo vitae
          illo at deserunt voluptatum enim, laboriosam ab. Nesciunt, doloribus
          ea! Minima.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Quos optio sint voluptatibus ipsa, neque minus similique velit nemo
          vitae illo at deserunt voluptatum enim, laboriosam ab. Nesciunt,
          doloribus ea! Minima. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Quos optio sint voluptatibus ipsa, neque minus
          similique velit nemo vitae illo at deserunt voluptatum enim,
          laboriosam ab. Nesciunt, doloribus ea! Minima.
        </p>

        <span>
          Genre: <span>Action, Adventure</span>
        </span>
        <span>
          Rating: <span>Everyone</span>
        </span>
        <span>
          Release: <span>{movie.date}</span>
        </span>
      </div>
    </div>
  );
}

export default MovieListCard;
