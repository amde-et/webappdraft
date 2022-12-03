import React from 'react';
import data from './data';
import '../Reviews/Reviews.css';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="service-title">
        <h1>About Me</h1>
      </div>

      <div className="barr">
        <div className="bar"></div>
      </div>
      <Slider
        {...settings}
        className="rev-wrapper"
      >
        {data.map((item, index) => {
          return (
            <div className="new1">
              <div
                className="rev-container"
                key={index}
              >
                <div className="rev-img-container">
                  <img
                    src={item.image}
                    alt="image"
                  />
                </div>

                <h1>{item.name}</h1>
                <h2>{item.job}</h2>
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Reviews;
