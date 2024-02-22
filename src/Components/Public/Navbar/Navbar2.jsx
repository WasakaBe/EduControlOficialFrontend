import React from 'react'
import './Navbar2.css'
import { logoCbta } from '../../../Image'
export default function Navbar2() {
  return (
    <div className='header'>
      <div className='header'>
      <div className='navbar-list'>
          <img src={logoCbta} alt='logo' />
          <span>EduControl</span>
        </div>
         <input type='checkbox' id='menu-bar'/>
         <label htmlFor='menu-bar'><ion-icon name="grid"></ion-icon></label>

        <div className='nav'>
           <ul>
              <li><a href='/'>Inicio</a></li>
              <li><a href='/#Acerca'>Acerca</a></li>
              <li><a href='/'>Servicios <ion-icon name="caret-down-outline"></ion-icon> </a>
               <ul>
                 <li><a href='/'>Becas</a></li>
                 <li><a href='/'>Credencial Esc</a></li>
                
                 <li><a href='/'>Tramites <ion-icon name="caret-forward-outline"></ion-icon></a>
                   <ul>
                     <li><a href='/'>Inscripcion</a></li>
                     <li><a href='/'>Reinscripcion</a></li>
                   </ul>
                 </li>
               </ul>
              
              
              </li>
              <li><a href='/'>Contacto</a></li>
              <li><a href='/Login'>Iniciar Sesion</a></li>
              <li><a href='/RegisterSelection'>Registrarse</a></li>
           </ul>

           
        </div>
    
      </div>
    </div>
  )
}
