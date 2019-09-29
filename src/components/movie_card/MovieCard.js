import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.scss";

const MovieCard = ({ movie }) => (
  <div
    className="card__carousel"
    style={{
      backgroundImage: `url(${movie.image})`
    }}
  >
    <h2>
      <Link to={"/movie"}>{movie.title}</Link>
    </h2>
  </div>
);

MovieCard.protoTypes = {
  movie: PropTypes.object.isRequired
};

export default MovieCard;
