import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div class="services" id="services">
      <p class="subtitulo">Services I provide</p>
      <h1 class="titulo">My Services</h1>

      <div class="servicios-tarjetas">
        <div class="tarjeta tarjeta-servicio">
          <i class="bi bi-window-fullscreen"></i>
          <div class="tarjeta-texto">
            <h3>Website Design</h3>
            <p>I create website design as per the need of my clients.</p>
          </div>
        </div>
        <div class="tarjeta tarjeta-servicio">
          <i class="bi bi-phone-vibrate"></i>
          <div class="tarjeta-texto">
            <h3>Application Design</h3>
            <p>I create application design as per the need of my clients.</p>
          </div>
        </div>
        <div class="tarjeta tarjeta-servicio">
          <i class="bi bi-clipboard2-data"></i>
          <div class="tarjeta-texto">
            <h3>Dashboard Design</h3>
            <p>I create dashboard design as per the need of my clients.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Services };
