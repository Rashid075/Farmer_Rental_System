
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./card";
import "./card.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "green" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "green" }}
      onClick={onClick}
    />
  );
}
const CardSlider = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="bg">
      <div className="header">
        <h1>Transportation Equipments</h1>
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

export default CardSlider;
