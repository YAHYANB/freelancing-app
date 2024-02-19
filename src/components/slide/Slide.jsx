import React from "react";
import "./Slide.scss";
// import Slider from "infinite-react-carousel"
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Slide = ({ children, }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow : <MdOutlineArrowForwardIos clasName="nextArrow" />,
    prevArrow : <MdOutlineArrowBackIos clasName="prevArrow" />
  };
  return (
    <div className="slide">
      <div className="container">
        <Slider {...settings} >
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
