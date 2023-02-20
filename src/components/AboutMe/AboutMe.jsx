import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about-me" id="about-me">
      <div className="about-me-container">
        {/* Imagen */}
        <div className="imagen-sobre-mi"></div>
        {/* Texto */}
        <div className="about-me-text">
          <h1>Sobre Mi</h1>
          <h2>Diseñador Front End</h2>
          <p>
            Con 5 años de experiencia en diseño grafico, decidí estudiar
            desarrollo web para profundizar mis conocimientos en un mercado en
            evolución constante.
          </p>
        </div>
      </div>
    </section>
  );
};

export { AboutMe };
