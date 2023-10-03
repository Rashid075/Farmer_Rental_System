import React from "react";
import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    // <div className='footer'>
    <footer class="footer">
      <div class="containerss">
        <div class="row">
          <div class="footer-col">
            <h4>About Us</h4>
            <p>
            At Agriconnect, we're dedicated to empowering farmers and
              cultivating prosperous futures. We bridge the gap between farmers
              and customers, fostering a community where agriculture thrives.
              Join us in nurturing a sustainable, profitable, and accessible
              future for all.
            </p>
          </div>
          <div class="footer-col">
            <h4>Follow Us </h4>
            <div class="social-links">
              <Link to="#">
              <InstagramIcon className="icons"/>
              </Link>
              <Link to="#">
              <TwitterIcon className="icons"/>
              </Link>
              <Link to="#">
              <FacebookIcon className="icons"/>
              </Link>
              <Link to="#">
              <LinkedInIcon className="icons"/>
              </Link>
            </div>
          </div>
          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#">Help</Link>
              </li>
              <li>
                <Link to="#">Terms and Conditions</Link>
              </li>
              <li>
                <Link to="#">FAQ</Link>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact Info</h4>
            <Link to="#">
              <i class="fa-solid fa-location-dot"></i>
            </Link>
            <p>123 Duvvada Visakhapatnam,pin-530046,Andhra Pradesh</p>
            <Link to="#">
              <i class="fa-solid fa-phone"></i>
            </Link>
            <p>+91 83743 39100</p>
            <p>+91 78426 10943</p>
            <Link to="#">
              <i class="fa-solid fa-envelope"></i>
            </Link>
            <p>rashidshaik354@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
    // </div>
    // </div>
  );
}