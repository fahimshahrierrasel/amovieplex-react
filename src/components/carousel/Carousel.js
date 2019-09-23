import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

function Carousel({ image, title }) {
  return (
    <div className="carousel">
      <img src={image} alt="{title}" />
      <h2>{title}</h2>
    </div>
  );
}

Carousel.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Carousel;
