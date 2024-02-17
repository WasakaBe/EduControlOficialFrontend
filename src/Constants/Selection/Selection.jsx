// Selection.js
import React, { useState } from 'react';
import { Navbar, Footer } from '../../Components/Public';
import './Selection.css';

export default function Selection() {
  const [email, setEmail] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);

    // Validar el formato del correo electrónico y establecer el color de fondo
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);
    setBackgroundColor(isValidEmail ? 'green' : 'red');
  };

  const handleNextClick = () => {
    setLoading(true);

    // Simulación de una solicitud asíncrona (puedes reemplazar esto con una llamada a una API)
    setTimeout(() => {
      // Mostrar el formulario de contraseña después de la simulación de carga
      setShowPasswordForm(true);
      setLoading(false);
    }, 5000); // Simula una carga de 2 segundos
  };

  return (
    <div>
      <Navbar />
      {/* Formulario de inicio de sesión */}
      <form className={`formulario1 ${showPasswordForm ? 'formulario1-password' : 'formulario1-email'}`} style={{ backgroundColor: backgroundColor }}>
        <label>{showPasswordForm ? 'Ingresar Contraseña' : 'Iniciar Sesión'}</label>
        {showPasswordForm ? (
          <>
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" placeholder='Ingrese su contraseña' />
          </>
        ) : (
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder='Ingrese su correo'
          />
        )}
        <button type="button" onClick={handleNextClick}>
          {loading ? 'Cargando...' : 'Siguiente'}
        </button>
      </form>
      <Footer />
    </div>
  );
}
