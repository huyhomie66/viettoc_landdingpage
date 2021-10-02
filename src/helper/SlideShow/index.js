import React, { Component } from "react";
import Slider from "react-slick";
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";
import banner from '../../assets/banner.png'
import tet from '../../assets/tet.png'

export default function SlideShow(){
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={banner} />
          </div>
          <div>
            <img src={tet} />
          </div>
        </Slider>
      </div>
    );
}