import React from "react";
import "./Portfolio.css";
import app_billetera from "../../img/app_billetera.jpg";
import apple_website from "../../img/apple_website.jpg";
import git_website from "../../img/git_website.jpg";
const Portfolio = () => {
  return (
    <>
      <div className="portfolio" id="portfolio">
        <p className="subtitulo">Recent Projects</p>
        <h1 className="titulo">My Portfolio</h1>

        <div className="portfolio-contenedor">
          <div className="tarjeta-portfolio">
            <div className="imagen-portfolio">
              <img src={app_billetera} alt="App Billetera" />
            </div>
            <div className="portfolio-texto">
              <h3>App Billetera</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, veritatis!
              </p>
              <button className="btn btn-portfolio">Ver proyecto</button>
            </div>
          </div>
          <div className="tarjeta-portfolio">
            <div className="imagen-portfolio">
              <img src={apple_website} alt="App Billetera" />
            </div>
            <div className="portfolio-texto">
              <h3>Apple Website</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, veritatis!
              </p>
              <button className="btn btn-portfolio">Ver proyecto</button>
            </div>
          </div>
          <div className="tarjeta-portfolio">
            <div className="imagen-portfolio">
              <img src={git_website} alt="App Billetera" />
            </div>
            <div className="portfolio-texto">
              <h3>Navbar</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, veritatis!
              </p>
              <button className="btn btn-portfolio">Ver proyecto</button>
            </div>
          </div>
        </div>
        <div className="btn-contenedor">
          <button className="btn">Ver Todos Los Proyectos</button>
        </div>
      </div>
      <div className="portfolio">
        <p className="subtitulo">Why You Should Choose Me</p>
        <h1 className="titulo">Why Choose me</h1>
        <div className="elegir-tarjetas">
          <div className="tarjeta tarjeta-choose">
            <i className="bi bi-people-fill"></i>
            <div className="tarjeta-choose-texto">
              <h3>Team Player</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                beatae?
              </p>
            </div>
          </div>
          <div className="tarjeta tarjeta-choose">
            <i className="bi bi-pen-fill"></i>
            <div className="tarjeta-choose-texto">
              <h3>Creative Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                similique.
              </p>
            </div>
          </div>
          <div className="tarjeta tarjeta-choose">
            <i className="bi bi-rocket-takeoff-fill"></i>
            <div className="tarjeta-choose-texto">
              <h3>Responsive</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, ullam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Portfolio };
