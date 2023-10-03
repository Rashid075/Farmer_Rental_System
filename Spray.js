
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../pages/Card/card";
import "../pages/Card/card.css";

const Spray = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  }
  return (
    <div className="bg">
      <div className="header">
        <h1>Spraying Equipments</h1>
      </div>
      <div className="card-slider">
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.id}>
              <Card
                title={item.name}
                description={item.description}
                image={item.img}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Spray;
