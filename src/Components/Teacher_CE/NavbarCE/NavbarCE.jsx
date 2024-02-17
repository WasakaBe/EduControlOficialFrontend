/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { logoCbta } from '../../../Image';
export default function NavbarCE() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className='container-navbar'>
      <div className='navbar'>
          <div className='navbar-list'>
            <img src={logoCbta} alt='logo'/>
            <span>EduControl</span>
          </div>
          <div className='navbar-list'>
            <ul>
              <li>
                <a href='/'>Inicio</a>
              </li>
              <li>
                <a href='/'>Credencial</a>
              </li>
              <li>
                <a href='/'>Ver <ion-icon name="caret-down-outline"></ion-icon></a>
                <ul className='list-li3'>
                        <li>
                          <a href='/'>Lista de Alumnos</a>
                        </li>
                        <li>
                          <a href='/'>Lista de Docentes</a>
                        </li>
                      </ul>
              </li>
            </ul>
          </div>
          <div className='navbar-list'>
            <ul className='navbar-sign'>
               <li className='list-signup'>
                 <a href='/' ><ion-icon name="person-circle-outline"></ion-icon>
                 </a>
                
                      <ul className='list-li'>
                        <li>
                          <a>@nombre</a>  
                        </li>
                        <li>
                          <a href='/LoginCE'>Configuracion</a>
                        </li>
                        <li>
                          <a href='/LoginAlumnos'>Ayuda</a>
                        </li>
                        <li>
                          <a href='/LoginPadres'>Cerrar Sesion</a>
                        </li>
                      </ul>

               </li>
            </ul>
          </div>
      </div>

      {/*BOTON DE MENU DE HAMBURGESA */}
        
         <div className='menuHamburguesa' onClick={toggleMenu}>
          <ion-icon name={isMenuOpen ? 'close' : 'menu'}></ion-icon>
        </div>
          {/* Menú desplegable */}
          {isMenuOpen && (
          <div className='mobile-menu'>
            <ul>
              <li>
                <a href='/'>Inicio</a>
              </li>
              <li>
                <a href='/'>Acerca</a>
              </li>
              <li>
                <a href='/'><ion-icon name="caret-down-outline"></ion-icon>Ver</a>
                <ul className='list-li3'>
                        <li>
                          <a href='/'>Horario</a>
                        </li>
                        <li>
                          <a href='/'>Reportes</a>
                        </li>
                      </ul>
              </li>
            </ul>

            <div className='menu-navbar-list'>
            <ul className='navbar-sign'>
               <li className='list-signup'>
                 <a href='/' ><ion-icon name="person-circle-outline"></ion-icon>
                 </a>
                
                      <ul className='list-li-menu'>
                      <li>
                          <a>@nombre</a>  
                        </li>
                        <li>
                          <a href='/LoginCE'>Configuracion</a>
                        </li>
                        <li>
                          <a href='/LoginAlumnos'>Ayuda</a>
                        </li>
                        <li>
                          <a href='/LoginPadres'>Cerrar Sesion</a>
                        </li>
                      </ul>

               </li>
            </ul>
          </div>

          </div>
    
        )}
    </div>
  )
}
