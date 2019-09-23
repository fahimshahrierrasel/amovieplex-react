import React from "react";
import PropTypes from "prop-types";

const CarouselCard = ({ image }) => (
  <div className="card__carousel">
    <img src={image} alt="" />
  </div>
);

CarouselCard.protoTypes = {
  image: PropTypes.string.isRequired
};

export default CarouselCard;
