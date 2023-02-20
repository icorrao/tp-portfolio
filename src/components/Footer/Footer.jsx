import React from "react";
import "./Footer.css";
import { useForm } from "@formspree/react";
const Footer = () => {
  const [state, handleSubmit] = useForm("xnqyddql");
  let formularioFooter = document.getElementById("formulario-footer");
  if (state.succeeded) {
    formularioFooter.innerHTML = "<p>Gracias por unirte!</p>";
  }
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-top-1">
          <h2>Información para clientes</h2>
          <p>Encontrá ayuda para tus proyectos</p>
        </div>

        <div className="footer-top-2">
          <h2>Conseguir Ofertas y Novedades</h2>
          <p>Subscríbase al newsletter</p>
        </div>

        {/* Formulario para newsletter */}
        <form
          className="footer-form"
          onSubmit={handleSubmit}
          id="formulario-footer"
        >
          <input type="text" name="email" id="email" placeholder="Email" />
          <button type="submit" disabled={state.submitting} className="btn">
            Unirse
          </button>
        </form>
      </div>

      <div className="footer-mid">
        <div className="column">
          <h2 id="footer-nombre">IGNACIO CORRAO</h2>
          <p>Diseñador Front End</p>
        </div>

        <div className="column">
          <h3>SERVICIOS</h3>
          <p>
            {" "}
            <a href="#web-design">Diseño Web</a>
          </p>
          <p>
            {" "}
            <a href="#app-design">Diseño de Apps</a>
          </p>
          <p>
            <a href="#dashboard-design">Diseño de Dashboards</a>
          </p>
        </div>

        <div className="column">
          <h3>SOBRE MI</h3>
          <a href="#about-me">Sección Sobre Mi</a>
        </div>

        <div className="column">
          <h3>CONTACTO</h3>
          <p>
            <i className="bi bi-telephone-fill"></i> +92 XXXXXXXXXX
          </p>
          <p>
            <i className="bi bi-envelope"></i> XXXXXXXX@gmail.com
          </p>
          <p>
            <i className="bi bi-skype"></i> XXXXXXXX
          </p>
        </div>

        <div className="column">
          <h3>REDES SOCIALES</h3>
          <span className="social">
            <a href="#">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#">
              <i className="bi bi-youtube"></i>
            </a>
            <a href="#">
              <i className="bi bi-instagram"></i>
            </a>
          </span>
        </div>
      </div>

      <span className="footer-bottom">
        Copyright 2023 Inc. All rights reserved. |{" "}
        <a href="#">Condiciones de Uso</a> | <a href="#">Privacidad</a> |{" "}
        <a href="#">Accessibilidad</a>
      </span>
    </footer>
  );
};

export { Footer };
