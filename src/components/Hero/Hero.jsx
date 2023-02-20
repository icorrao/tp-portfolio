import React from "react";
import "./Hero.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Hero = () => {
  return (
    <section className="hero-container" id="home">
      <div className="hero-container-arriba">
        <div className="hero-container-texto">
          <h3>Hola, soy</h3>
          <h1>Ignacio Corrao</h1>
          <h2>UI/UX Designer</h2>
          <p>Estudiante de diseño fron end con 6 meses de experiencia.</p>

          <div className="hero-botones-contenedor">
            <a href="#contacto">
              <button className="btn">Contacto</button>
            </a>
            <a href="#portfolio">
              <button className="btn btn-2">Ver Portfolio</button>
            </a>
          </div>
        </div>
        <div className="imagen"></div>
      </div>

      {/* Tarjetas de la seccion hero */}
      <div className="hero-tarjetas">
        <div className="tarjeta">
          <i className="bi bi-award"></i>
          <div className="tarjeta-texto">
            <p>02</p>
            <p>Cursos Realizados</p>
          </div>
        </div>
        <div className="tarjeta">
          <i class="bi bi-filetype-html"></i>
          <div className="tarjeta-texto">
            <p>Experiencia</p>
            <p>HTML y CSS</p>
          </div>
        </div>
        <div className="tarjeta">
          <i className="bi bi-award-fill"></i>
          <div className="tarjeta-texto">
            <p>6 Meses+</p>
            <p>Experiencia</p>
          </div>
        </div>
        <div className="tarjeta">
          <i className="bi bi-trophy"></i>
          <div className="tarjeta-texto">
            <p>10+</p>
            <p>Proyectos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
