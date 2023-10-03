import React from "react";
import Agriconnect from "../../screens/agric.png";
import "../../screens/nav.css";
import { Link } from "react-router-dom";
const Rental = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <img src={Agriconnect} style={{ height: "12vh",marginRight:"10px" }} alt="Amrutha" />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mt-0" >
                <Link className="nav-link active" aria-current="page" to="/hero">
                  Home
                </Link>
              </li>
              <li className="nav-item mt-0">
                <Link className="nav-link" to="/">
                  Categories
                </Link>
              </li>
              <li className="nav-item mt-0">
                <Link className="nav-link" to="#">
                  Contact
                </Link>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{marginRight:"0%", height:"40px"}}
              />
              <button class="btn btn-outline-success mx-0" type="submit" style={{height:"40px"}}>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Rental;
