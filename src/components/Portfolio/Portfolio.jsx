import React from "react";
import "./Portfolio.css";
import app_billetera from "../../img/app_billetera.jpg";
import apple_website from "../../img/apple_website.jpg";
import git_website from "../../img/git_website.jpg";
import dibujo_fondo_izq from "../../img/dibujo_fondo-izq.jpg";
const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio" id="portfolio">
        <p className="subtitulo">Proyectos Recientes</p>
        <h1 className="titulo">Mi Portfolio</h1>

        <div className="portfolio-contenedor">
          <div className="tarjeta-portfolio">
            <div className="imagen-portfolio">
              <img src={app_billetera} alt="App Billetera" />
            </div>
            <div className="portfolio-texto">
              <h3>App Billetera</h3>
              <p>App billetera realizado con HTML, CSS y Javascript</p>
              <a
                href="https://github.com/icorrao/TP-App-Billetera"
                target={"_blank"}
                rel="noreferrer"
              >
                <button className="btn btn-portfolio">Ver proyecto</button>
              </a>
            </div>
          </div>
          <div className="tarjeta-portfolio">
            <div className="imagen-portfolio">
              <img src={apple_website} alt="App Billetera" />
            </div>
            <div className="portfolio-texto">
              <h3>Apple Website</h3>
              <p>Layout de la página de Apple hecho con HTML y CSS</p>
              <a
                href="https://github.com/icorrao/Apple-layout"
                target={"_blank"}
                rel="noreferrer"
              >
                <button className="btn btn-portfolio">Ver proyecto</button>
              </a>
            </div>
          </div>
          <div className="tarjeta-portfolio">
            <div className="imagen-portfolio">
              <img src={git_website} alt="App Billetera" />
            </div>
            <div className="portfolio-texto">
              <h3>Git Website</h3>
              <p>Layout de la página de Git hecho con HTML y CSS</p>
              <a
                href="https://github.com/icorrao/git-layout"
                target={"_blank"}
                rel="noreferrer"
              >
                <button className="btn btn-portfolio">Ver proyecto</button>
              </a>
            </div>
          </div>
        </div>
        <div className="btn-contenedor">
          <a
            href="https://github.com/icorrao?tab=repositories"
            target={"_blank"}
            rel="noreferrer"
          >
            <button className="btn">Ver Todos Los Proyectos</button>
          </a>
        </div>
      </div>
      <div className="portfolio">
        <p className="subtitulo">Por qué deberás elegirme</p>
        <h1 className="titulo">Por Qué Elegirme</h1>
        <div className="elegir-tarjetas">
          <div className="tarjeta tarjeta-choose">
            <i className="bi bi-people-fill"></i>
            <div className="tarjeta-choose-texto">
              <h3>Trabajo en Equipo</h3>
              <p>
                Puedo realizar trabajos con equipos para lograr nuestros
                objetivos.
              </p>
            </div>
          </div>
          <div className="tarjeta tarjeta-choose">
            <i className="bi bi-pen-fill"></i>
            <div className="tarjeta-choose-texto">
              <h3>Diseño Creativo</h3>
              <p>
                Puedo realizar los diseños que necesite el cliente en el tiempo
                estipulado.
              </p>
            </div>
          </div>
          <div className="tarjeta tarjeta-choose">
            <i className="bi bi-rocket-takeoff-fill"></i>
            <div className="tarjeta-choose-texto">
              <h3>Diseño Responsive</h3>
              <p>
                Adapto los diseños a los viewports que sean necesarios para el
                proyecto.
              </p>
            </div>
          </div>
        </div>
        <p className="subtitulo">Testimonios de Clientes</p>
        <h1 className="titulo">Testimonios</h1>
      </div>
      <img src={dibujo_fondo_izq} alt="dibujo_fondo-izq" id="dibujo-2" />
    </section>
  );
};

export { Portfolio };
