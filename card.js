import React from "react";
const Card = ({ title, description, image }) => {
  return (
    <div>
      <div className="card shadow" style={{width:"25vw"}}>
        <img src={image} alt={title} style={{ height: "40vh" }} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description.slice(0,108)+"..."}</p>
        </div>
        <button type="button" class="btn btn-success" style={{width:"20vh", margin:"3vh"}}>View More</button>
      </div>
    </div>
  );
};

export default Card;
