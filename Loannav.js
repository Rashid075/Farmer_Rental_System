import React from "react";
import "./Lnav.css";
import Agriconnect from "../../screens/agric.png";
import { Link } from "react-router-dom";
const Loannav = () => {
  return (
    <div className="loan">
          <img src={Agriconnect} style={{ height: "11vh" }} alt="Amrutha" className="img" />
          <ul className="nav">
            <li>
              <Link href="#" className="nav-link">Home</Link>
            </li>
            <li>
              <Link href="#" className="nav-link">About</Link>
            </li>
            <li>
              <Link href="#" className="nav-link">Contact</Link>
            </li>
            <li>
              <Link href="#" className="nav-link">Loan</Link>
            </li>
          </ul>
    </div>
  );
};

export default Loannav;
