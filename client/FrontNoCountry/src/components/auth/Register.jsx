import { useState } from "react";
import "../../assets/css/login/register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Aquí puedes agregar la lógica de registro
    console.log(
      `Registrarse con nombre: ${name}, email: ${email}, y contraseña: ${password}`
    );
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Registro</h2>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Registrarse</button>
      </div>
    </div>
  );
};

export default Register;
