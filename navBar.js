import React from "react";
import Agriconnect from "../screens/agric.png";
import "./styling/nav.css";
// import { FaBars, FaTimes } from 'react-icons/fa';
import { useState} from 'react';
import { Link } from "react-router-dom";
//import Button from "@mui/material/Button";
export default function NavBar() {
    const [click, setClick]=useState(false);
    const handleClick = () =>setClick(!click);
    return (
      <div className="navBar">
        <img className="logo" src={Agriconnect} alt="logo" />
        {/* <img src="https://media.istockphoto.com/id/516688358/photo/freedom.jpg?s=612x612&w=0&k=20&c=taveej0OXa9YdGy4YOHQIRm4ghgR1k0__jrHVrgXwpU="/> */}
        <div className="sections">
          <Link to="#" className="links">
            Home
          </Link>
          <Link to="/homerent" className="links">
            Rentals
          </Link>
          <Link to="/loan" className="links">
            Loan System
          </Link>
          <Link to="#" className="links">
            Contacts
          </Link>
        </div>
      </div>
    );
  }