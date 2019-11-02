import React from "react";
import { withRouter } from "react-router-dom";
import "./movie-list-card.scss";
import { Routes } from "../../../constants/routes";

function MovieListCard({ movie, history }) {
  return (
    <div className="movie-list__card">
      <div className="movie-list__card-image">
        <img src={movie.image} alt="" />
      </div>
      <div className="movie-list__card-details">
        <h2
          role="presentation"
          className="movie__title"
          onClick={() => history.push(Routes.MOVIE_DETAIL_PAGE(movie.title))}
        >
          {movie.title}
        </h2>
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

export default withRouter(MovieListCard);
