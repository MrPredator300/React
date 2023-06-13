//https://www.geeksforgeeks.org/creating-a-carousel-with-reactjs-slick/

import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick';

import "./CarouselPf.css"

const CarouselPf = ({ImagesPf}) => {

  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };


    return (
      <div>
        <div className='main-div'>
          <h1>CarouselPf</h1>
        </div>
        <div className='imgSlider'>
          <Slider {...settings}>
            {ImagesPf.map((item)=>(
              <div key={item.id}>
                <img src={item.src} alt={item.alt} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    )

}

export default CarouselPf