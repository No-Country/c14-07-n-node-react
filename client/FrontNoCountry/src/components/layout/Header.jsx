import "../../assets/css/layout/header.css";
import { Link } from 'react-router-dom';


const Header = () => {
  
  return (
    <header className="header-container">
      <div className="logo">Logo</div>
      <nav className="nav-options">
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#"><a href="#"><Link to="/about">Sobre nosotros</Link></a></a>
          </li>
          <li>
            <a href="#">Servicios</a>
          </li>
          <li>
            <a href="#"><Link to="/contact">Contactanos</Link></a>
          </li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="login-button"><Link className="a-color" to="/login">Login</Link></button>
        <button className="signup-button"><Link className="a-color" to="/register">Registrarse</Link></button>
      </div>
    </header>
  );
}

export default Header;
