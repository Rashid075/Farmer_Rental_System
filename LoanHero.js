import React from "react";
import Button from "@mui/material/Button";
import "./LHome.css";
import { useNavigate } from "react-router-dom";
const LoanHero = () => {
  const navigate=useNavigate();
  const handleApplyNowClick = () => {
    navigate("/form");
  };
  return (
    <div>
      <header>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="rgb(224,239,194)"
            fill-opacity="1"
            d="M0,256L40,245.3C80,235,160,213,240,208C320,203,400,213,480,229.3C560,245,640,267,720,282.7C800,299,880,309,960,309.3C1040,309,1120,299,1200,288C1280,277,1360,267,1400,261.3L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </header>
      <div className="hero">
        <div className="overlay">
          <div className="hero-content">
            <h1 className="heroHead">Welcome To AgriConnect</h1>
            <p className="overlay-text">
              At Agriconnect, we're dedicated to empowering farmers and
              cultivating prosperous futures. We bridge the gap between farmers
              and customers, fostering a community where agriculture thrives.
            </p>
            <div className="button-container">
              <Button
                variant="contained"
                color="success"
                style={{ marginRight: "30px" }}
              >
                Learn More
              </Button>
              <Button variant="contained" color="success" onClick={handleApplyNowClick}>
                Apply Now
              </Button>
            </div>
          </div>
          <div className="image-container">
            <img
              className="img"
              src="https://img.freepik.com/free-vector/bank-loan-concept-illustration_114360-17863.jpg?size=626&ext=jpg&ga=GA1.2.134294676.1694251365&semt=sph"
              alt="Amrutha"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanHero;
