import "./Navbar.css";
import Button from "../../ui/Button/Button";

export default function Navbar() {
  return (
    <header className="navbar">

      <div className="container navbar-container">

        <a href="/" className="navbar-logo">
          SCALA
        </a>

        <nav className="navbar-links">

          <a href="#inicio">Inicio</a>

          <a href="#ecosistema">Ecosistema</a>

          <a href="#servicios">Servicios</a>

          <a href="#nosotros">Nosotros</a>

          <a href="#contacto">Contacto</a>

        </nav>

        <Button>
          Comienza a crecer
        </Button>

      </div>

    </header>
  );
}