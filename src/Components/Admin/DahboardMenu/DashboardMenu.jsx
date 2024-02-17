import React from 'react'
import {useNavigate} from 'react-router-dom'
import './DashboardMenu.css'
import {exampleG, logoCbta} from '../../../Image'
export default function DashboardMenu({ onButtonClick }) {
  const nav = useNavigate();
  const cerrarSesion= () =>{
      nav('/');
  }
  return (
    <div>
      <div className='container-dashboard-menu'>
        <div className='section-dates-menu'>
          <img src={exampleG} alt=''/>
          <h2>Cassandra De La Cruza Flores Monterrubio</h2>
          <h4>cassandra@gmail.com</h4>
        </div>
        <div className='section-buttons-menu'>
          <div className='logo-text-menu'>
            <button onClick={() => onButtonClick('dashboard')}>Dashboard</button>
          </div>
          <div className='logo-text-menu'>
            <button onClick={() => onButtonClick('Credencial')}>Credencial</button>
          </div>
          <div className='logo-text-menu'>
            <button onClick={() => onButtonClick('Listas')}>Listas</button>
          </div>
          <div className='logo-text-menu'>
            <button onClick={() => onButtonClick('Mensajeria')}>Mensajeria</button>
          </div>
          <div className='logo-text-menu'>
            <button onClick={() => onButtonClick('Perfil')}>Perfil</button>
          </div>
          <div className='logo-text-menu'>
            <button onClick={() => onButtonClick('Configuracion')}>Configuracion</button>
          </div>
          <div className='logo-text-menu'>
            <button onClick={cerrarSesion}>Cerrar Sesion</button>
          </div>
        </div>
        <img className='logoCbta1' src={logoCbta} alt=''/>
      </div>
    </div>
  )
}
