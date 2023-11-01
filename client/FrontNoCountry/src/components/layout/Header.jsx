import "../../assets/css/layout/header.css";

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
            <a href="#">Acerca de</a>
          </li>
          <li>
            <a href="#">Servicios</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="login-button">Iniciar Sesión</button>
        <button className="signup-button">Registrarse</button>
      </div>
    </header>
  );
}

export default Header;
