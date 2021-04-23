import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImageSlider = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings} className="carousel">
      <div className="slider-image-wrapper">
        <a>
          <img
            src="https://github.com/CleverProgrammers/cp-disney-plus-clone/blob/master/public/images/slider-badging.jpg?raw=true"
            alt=""
            className="slider-image"
          />
        </a>
      </div>

      <div className="slider-image-wrapper">
        <a>
          <img
            src="https://github.com/CleverProgrammers/cp-disney-plus-clone/blob/master/public/images/slider-scale.jpg?raw=true"
            alt=""
            className="slider-image"
          />
        </a>
      </div>

      <div className="slider-image-wrapper">
        <a>
          <img
            src="https://github.com/CleverProgrammers/cp-disney-plus-clone/blob/master/public/images/slider-badag.jpg?raw=true"
            alt=""
            className="slider-image"
          />
        </a>
      </div>

      <div className="slider-image-wrapper">
        <a>
          <img
            src="https://github.com/CleverProgrammers/cp-disney-plus-clone/blob/master/public/images/slider-scales.jpg?raw=true"
            alt=""
            className="slider-image"
          />
        </a>
      </div>
    </Slider>
  );
};

export default ImageSlider;
