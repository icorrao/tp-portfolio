import React from "react";
import dibujo_fondo_der from "../../img/dibujo_fondo-der.jpg";
import "./Services.css";

const Services = () => {
  return (
    <section class="services" id="services">
      <p class="subtitulo">Servicios que proveo</p>
      <h1 class="titulo">Mis Servicios</h1>

      <div class="servicios-tarjetas-contenedor">
        <div class="tarjeta tarjeta-servicio" id="web-design">
          <i class="bi bi-window-fullscreen"></i>
          <div class="tarjeta-texto tarjeta-texto-servicios">
            <h3>Diseño Web</h3>
            <p>
              Puedo crear páginas web que se ajusten a las necesidades de los
              clientes.
            </p>
          </div>
        </div>
        <div class="tarjeta tarjeta-servicio" id="app-design">
          <i class="bi bi-phone-vibrate"></i>
          <div class="tarjeta-texto tarjeta-texto-servicios">
            <h3>Diseño de Aplicaciones</h3>
            <p>
              Puedo crear diseños de aplicaciones que se ajusten a las
              necesidades de los clientes.
            </p>
          </div>
        </div>
        <div class="tarjeta tarjeta-servicio" id="dashboard-design">
          <i class="bi bi-clipboard2-data"></i>
          <div class="tarjeta-texto tarjeta-texto-servicios">
            <h3>Diseño de Dashboards</h3>
            <p>
              Puedo crear diseños de dashboards que se ajusten a las necesidades
              de los clientes.
            </p>
          </div>
        </div>
      </div>
      <img src={dibujo_fondo_der} alt="dibujo_fondo_der" id="dibujo-1" />
    </section>
  );
};

export { Services };
