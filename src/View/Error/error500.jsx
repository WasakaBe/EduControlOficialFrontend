import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Footer, Navbar } from '../../Components/Public';
export default function Error500() {
  const navigate = useNavigate();
  const regresar = () =>{
    navigate('/');
  }
  return (
    <>
    <Navbar/>
       <div className="error-container">
      <div className="error-content">
        <h1 className="error-title">500</h1>
        <p className="error-message">¡Ups! Algo salió mal en el servidor....</p>
        <button onClick={regresar}>Regresar</button>
      </div>
    </div>
    <Footer/>
    
    </>
  );
}
