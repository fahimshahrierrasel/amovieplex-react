import React from "react";
import PropTypes from "prop-types";
import "./carousel.scss";

function Carousel({ image, title }) {
  return (
    <div className="carousel">
      <div className="overlay">
        <h2>{title}</h2>
        <div className="btn btn--animated">Play Trailer</div>
      </div>
      <img src={image} alt={title} />
    </div>
  );
}

Carousel.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Carousel;
