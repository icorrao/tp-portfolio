import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="">
          <h2>Customer Support</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="">
          <h2>Get Deals & Reveals</h2>
          <p>Lorem ipsum, dolor sit amet.</p>
        </div>
        <div className="footer-form">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter Email"
          />
          <button className="btn">Join</button>
        </div>
      </div>
      <div className="footer-mid">
        <div className="column">
          <h2>HASSAN ALI</h2>
          <p>UI/UX Designer</p>
        </div>
        <div className="column">
          <h3>SERVICES</h3>
          <p>Web Design</p>
          <p>App Design</p>
          <p>Dashboard Design</p>
        </div>
        <div className="column">
          <h3>ABOUT</h3>
          <p>Blog</p>
          <p>Mission</p>
          <p>My Story</p>
        </div>
        <div className="column">
          <h3>CONTACT</h3>
          <p>
            <i className="bi bi-telephone-fill"></i> +92 XXXXXXXXXX
          </p>
          <p>
            <i className="bi bi-envelope"></i> hassanali.uiux@gmail.com
          </p>
          <p>
            <i className="bi bi-skype"></i> XXXXXXXX
          </p>
        </div>
        <div className="column">
          <h3>SOCIAL MEDIA</h3>
          <p>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-youtube"></i>
            <i className="bi bi-instagram"></i>
          </p>
        </div>
      </div>
      <span className="footer-bottom">
        Copyright 2023 Inc. All rights reserved. | Terms of Use | Updated
        Privacy Policy | Accessibility
      </span>
    </footer>
  );
};

export { Footer };
