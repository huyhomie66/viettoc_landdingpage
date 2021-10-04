import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

// custom dots inside banner of slide show
const CustomDots = (dots) => (
  <div
    style={{
      marginTop: "-25px",
      bottom: "20px",
      position: "relative",
      zIndex: 10,
      display: "flex",
      width: "100%",
    }}
  >
    <ul
      style={{
        margin: "0px",
        width: "100%",
      }}
    >
      {dots}
    </ul>
  </div>
);

// slide show
export default function SlideShow(props) {
  const { arraySlides } = props;
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "buttonSlides",
    appendDots: (dots) => CustomDots(dots),
  };
  return (
    <Slider {...settings}>
      {arraySlides &&
        arraySlides.map((item, index) => {
          return (
            <div className="img-container" key={index}>
              <img src={item.img} alt={`${item.img}`} className="img-styles" />
            </div>
          );
        })}
    </Slider>
  );
}
