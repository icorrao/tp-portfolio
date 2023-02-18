import React from "react";
import "./Hero.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-container-arriba">
        <div className="hero-container-texto">
          <h3>Hello, I'm</h3>
          <h1>Hassan Ali</h1>
          <h2>UI/UX Designer</h2>
          <p>
            I solve problems of my clients by translating complex ideas into
            designs that look beautiful and are easy to use.
          </p>
          <button className="btn">Contacto</button>
          <button className="btn btn-2">Ver Portfolio</button>
        </div>
        <div className="imagen"></div>
      </div>

      <div className="hero-tarjetas">
        <div className="tarjeta">
          <i className="bi bi-award"></i>
          <div className="tarjeta-texto">
            <p>03</p>
            <p>Awards</p>
          </div>
        </div>
        <div className="tarjeta">
          <i className="bi bi-people"></i>
          <div className="tarjeta-texto">
            <p>100+</p>
            <p>Clients</p>
          </div>
        </div>
        <div className="tarjeta">
          <i className="bi bi-award-fill"></i>
          <div className="tarjeta-texto">
            <p>02 Years+</p>
            <p>Experience</p>
          </div>
        </div>
        <div className="tarjeta">
          <i className="bi bi-trophy"></i>
          <div className="tarjeta-texto">
            <p>100+</p>
            <p>Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
