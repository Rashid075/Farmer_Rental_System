import React from "react";
import "./styling/hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <img
        src="https://media.istockphoto.com/id/516688358/photo/freedom.jpg?s=612x612&w=0&k=20&c=taveej0OXa9YdGy4YOHQIRm4ghgR1k0__jrHVrgXwpU="
        className="heroimg" alt="hero"
      />
      <div className="overlay">
          <h1 id="heroHead">
            <span>Welcome to AgriConnect!</span>
          </h1>
          <p className="overlay-text">
            <span>
              At Agriconnect, we're dedicated to empowering farmers and
              cultivating prosperous futures. We bridge the gap between farmers
              and customers, fostering a community where agriculture thrives.
              Join us in nurturing a sustainable, profitable, and accessible
              future for all.
            </span>
          </p>
      </div>
    </div>
  );
}
