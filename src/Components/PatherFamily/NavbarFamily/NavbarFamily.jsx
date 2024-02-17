/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { logoCbta } from '../../../Image';
export default function NavbarFamily() {

 
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
                <a href='/'>Acerca</a>
              </li>
              <li>
                <a href='/'>Ver <ion-icon name="caret-down-outline"></ion-icon></a>
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
          </div>
          <div className='navbar-list'>
            <ul className='navbar-sign'>
               <li className='list-signup'>
                 <a href='/' ><ion-icon name="person-circle-outline"></ion-icon>
                 </a>
                
                 <li>
                
                <ul className='list-li3'>
                        <li>
                          <a href='/'>@username</a>
                        </li>
                        <li>
                          <a href='/'>Reportes</a>
                        </li>
                      </ul>
              </li>

               </li>
            </ul>
          </div>
      </div>

    </div>
  )
}
