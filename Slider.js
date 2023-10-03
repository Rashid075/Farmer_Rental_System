import React from "react";

const Slider = () => {
  return (
    <div>
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner" style={{height:"85vh"}}>
          <div class="carousel-item active">
            <img src="https://img.freepik.com/free-photo/smart-farming-with-agriculture-iot_53876-124634.jpg?size=626&ext=jpg&ga=GA1.1.134294676.1694251365&semt=ais  " class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://images.pexels.com/photos/3013440/pexels-photo-3013440.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://cdn.pixabay.com/photo/2016/12/16/13/18/canola-fields-1911392_1280.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
