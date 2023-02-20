import "./Header.css";

const Header = () => {
  const mostrarMenu = () => {
    let navResponsive = document.getElementById("nav-responsive");
    navResponsive.classList.toggle("activo");
    let boton = document.getElementById("hamburguesa");
    const activo = navResponsive.classList.contains("activo");
    navResponsive = activo
      ? boton.classList.add("bi-x")
      : boton.classList.remove("bi-x");
    boton.classList.add("bi-list");
  };
  return (
    <header className="header">
      <div className="header-container">
        <h1>Portfolio</h1>

        {/* Botones del nav */}
        <nav className="nav-derecha">
          <a href="#home" className="link">
            Inicio
          </a>
          <a href="#about-me" className="link">
            Sobre Mi
          </a>
          <a href="#services" className="link">
            Servicios
          </a>
          <a href="#portfolio" className="link">
            Portfolio
          </a>
          <a href="#contacto">
            <button className="btn">Contactar</button>
          </a>
        </nav>

        {/* Menu hamburguesa del nav */}
        <i
          className="bi bi-list hamburguesa"
          id="hamburguesa"
          onClick={mostrarMenu}
        ></i>

        {/* Menu nav visible en responsive */}
        <nav className="nav-derecha nav-responsive" id="nav-responsive">
          <a href="#home" className="link">
            Home
          </a>
          <a href="#about-me" className="link">
            About
          </a>
          <a href="#services" className="link">
            Services
          </a>
          <a href="#portfolio" className="link">
            Portfolio
          </a>
          <a href="#contacto">
            <button className="btn">Contact Me</button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export { Header };
