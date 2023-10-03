import React from "react";
import "./styling/aboutUs.css";

export default function AboutUs() {
  return (
    <div className="aboutUs">
      <h1 className="ABhead">About Us</h1>
      <div className="aboutUs-section">
        <div className="mission">
          <h2 className="subheadings">Mission</h2>
          <p>
            At Agriconnect, we envision a future where farming is efficient,
            profitable, and accessible to all. Our vision is to create a
            connected ecosystem that benefits both farmers and consumers. We
            strive to bridge the gap between agriculture and technology,
            revolutionizing the way farming is done.
          </p>
        </div>
        <div className="vision">
          <h2 className="subheadings">Vision</h2>
          At Agriconnect, we envision a future where farming is efficient,
          profitable, and accessible to all. Our vision is to create a connected
          ecosystem that benefits both farmers and consumers. We strive to
          bridge the gap between agriculture and technology, revolutionizing the
          way farming is done.
        </div>
        <img
        className="about-img"
        src="https://kj1bcdn.b-cdn.net/media/58866/farmer-1.jpg"
      alt="Img"/> 
      </div>
    </div>
  );
}