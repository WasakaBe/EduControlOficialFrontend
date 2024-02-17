import React from 'react'
import './error.css'
import { useNavigate } from 'react-router-dom';
import {Footer, Navbar} from '../../Components/Public'
export default function Error404() {
  const navigate = useNavigate();
  const regresar = () =>{
    navigate('/');
  }
  return (
    <>
      <Navbar/>
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-title">404 Not Found</h1>
        <p className="error-message">Parece que te has perdido en el futuro...</p>
        <p className="error-message">Esta pagina no existe o este en Mantenimiento...</p>
        <button onClick={regresar}>Regresar</button>
       
      </div>
    </div>
    <Footer/>
    </>
    
  );
}
