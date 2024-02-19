import React from 'react';
import './Inscription.css';
import videoFile from '../../../video/001.mp4';
export default function Inscription() {
  const vidRef = React.useRef();
  return (
    <div className='container-inscription'>

        <div className='sub-inscription'>
          <div className='subt-dates'>
                   <h2>Requisitos para la Inscripción</h2>
                      <p className='info-p'>El primer paso para entrar a nuestra institución es solicitar una ficha de nuevo ingreso:</p>
                      <div className='requisites'>
                        <ul>
                          <li>Copia del acta de Nacimiento.</li>
                          <li>Copia de la CURP (Actualizada).</li>
                          <li>Constancia de estudios con promedio.</li>
                          <li>2 fotografías tamaño infantil.</li>
                          <li>Copia del INE (TUTOR).</li>
                          <li>Comprobante de domicilio.</li>
                          <li>Cubrir el costo de la ficha.</li>
                          <li>Presentarse el interesado con el tutor.</li>
                        </ul>
                      </div>
                      <h4>Periodo:</h4>
                      <p className='p-periodo'>La expedición de fichas se llevará a cabo a partir <span>del 13 de febrero al 16 junio </span>del presente año.</p>
                     
                      <p className='p-periodo'>El Horario de atención es de <span>9:00 a.m. a 14:00 p.m.</span></p>
          </div>
              <div className='subt-section-video'>
           
                  <video
                    ref={vidRef}
                    src={videoFile}
                    type="video/mp4"
                    loop
                    controls={true}
                    muted
                  />
                  
              </div>
        </div>
    </div>
  );
}
