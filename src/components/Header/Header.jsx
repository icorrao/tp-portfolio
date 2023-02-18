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
    <header className="header" id="home">
      <div className="header-container">
        <h1>Portfolio</h1>
        <nav className="nav-derecha">
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

        <i
          className="bi bi-list hamburguesa"
          id="hamburguesa"
          onClick={mostrarMenu}
        ></i>

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
          <a href="contacto">
            <button className="btn">Contact Me</button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export { Header };
