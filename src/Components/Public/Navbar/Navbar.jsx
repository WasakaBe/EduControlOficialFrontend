import React from 'react';
import './Navbar.css';
import { logoCbta } from '../../../Image';
export default function Navbar() {
 
  return (
    <div className='container-navbar'>
      <div className='navbar'>
    
        {/* Logo y Nombre */}
        <div className='navbar-list'>
          <img src={logoCbta} alt='logo' />
          <span>EduControl</span>
        </div>

        {/* Enlaces de navegación */}
        <div className='navbar-list'>
          <ul>
            <li>
              <a href='/'>Inicio</a>
            </li>
            <li>
              <a href='/#Acerca'>Acerca</a>
            </li>
            <li>
              <a href='/'>
                Servicios <ion-icon name="caret-down-outline"></ion-icon>
              </a>
              <ul className='list-li3'>
                <li>
                  <a href='/servicios/escolares'>Escolares</a>
                </li>
                <li>
                  <a href='/servicios/becas'>Becas</a>
                </li>
                <li>
                  <a href='/'>
                    Trámites<ion-icon name="caret-forward-outline"></ion-icon>
                  </a>
                  <ul className='list-li4'>
                    <li>
                      <a href='/'>Reinscripción</a>
                    </li>
                    <li>
                      <a href='/'>Inscripción</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href='/#Contact'>Contactos</a>
            </li>
          </ul>
        </div>

        {/* Iconos de usuario */}
        <div className='navbar-list'>
          <ul className='navbar-sign'>
            <li className='list-signup'>
              <a href='/Login'>Iniciar Sesión
              </a>
            </li>
            <span>|</span>
            <li className='list-signup'>
              <a href='/RegisterSelection'>
                Registrar
              </a>
            </li>
          </ul>
        </div>
      </div>
       </div>
  );
}
