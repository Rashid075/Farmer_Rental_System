import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Card/card";
import "../Card/card.css";
const Irrigation = ({data}) => {
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
      <h1>Irrigation Equipments</h1>
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
  )
}

export default Irrigation