import React from "react";

const Footer = () => {
  return (
    <footer>
      <div class="footer-top">
        <div class="">
          <h2>Customer Support</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="">
          <h2>Get Deals & Reveals</h2>
          <p>Lorem ipsum, dolor sit amet.</p>
        </div>
        <div class="footer-form">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter Email"
          />
          <button class="btn">Join</button>
        </div>
      </div>
      <div class="footer-mid">
        <div class="column">
          <h2>HASSAN ALI</h2>
          <p>UI/UX Designer</p>
        </div>
        <div class="column">
          <h3>SERVICES</h3>
          <p>Web Design</p>
          <p>App Design</p>
          <p>Dashboard Design</p>
        </div>
        <div class="column">
          <h3>ABOUT</h3>
          <p>Blog</p>
          <p>Mission</p>
          <p>My Story</p>
        </div>
        <div class="column">
          <h3>CONTACT</h3>
          <p>
            <i class="bi bi-telephone-fill"></i> +92 XXXXXXXXXX
          </p>
          <p>
            <i class="bi bi-envelope"></i> hassanali.uiux@gmail.com
          </p>
          <p>
            <i class="bi bi-skype"></i> XXXXXXXX
          </p>
        </div>
        <div class="column">
          <h3>SOCIAL MEDIA</h3>
          <p>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-youtube"></i>
            <i class="bi bi-instagram"></i>
          </p>
        </div>
      </div>
      <span class="footer-bottom">
        Copyright 2023 Inc. All rights reserved. | Terms of Use | Updated
        Privacy Policy | Accessibility
      </span>
    </footer>
  );
};

export { Footer };
