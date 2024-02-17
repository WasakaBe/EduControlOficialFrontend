import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Navbar,Footer } from '../../Components/Public';
export default function Error400() {
  const navigate = useNavigate();
  const regresar = () =>{
    navigate('/');
  }
  return (
    <>
    <Navbar/>
 <div className="error-container">
      <div className="error-content">
        <h1 className="error-title">400 BAD REQUEST</h1>
        <p className="error-message">¡Ups!  la solicitud realizada por el cliente al servidor es incorrecta o defectuosa de alguna manera....</p>
        <button onClick={regresar}>Regresar</button>
      </div>
    </div>
    <Footer/>
   </>
  );
}
