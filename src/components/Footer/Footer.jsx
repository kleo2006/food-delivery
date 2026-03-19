import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/frontend_assets/assets'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    navigate("/");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
  }

  const scrollToSection = (id) => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  return (
    <div className="footer" id="footer">
      <div className="footer-content">

        {/* Left */}
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>Tomato is more than just a delivery service.
            It's a commitment to the vine-ripened quality your
            kitchen deserves. We bridge the gap between your
            favorite local eateries and your front door,
            ensuring every meal arrives as fresh as the
            day it was picked. Real food, real fast.</p>
          <div className="footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
        </div>

        {/* Center */}
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li onClick={scrollToTop}>Home</li>
            <li onClick={() => scrollToSection("explore-menu")}>About us</li>
            <li onClick={() => scrollToSection("app-download")}>Delivery</li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Right */}
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>
              <a href="tel:+12124567890">+1-212-456-7890</a>
            </li>
            <li>
              <a href="mailto:contact@tomato.al">contact@tomato.al</a>
            </li>
          </ul>
        </div>

      </div>
      <hr />
      <p className="footer-copyright">Copyright 2026 © Tomato.com | All Right Reserved</p>
    </div>
  )
}

export default Footer