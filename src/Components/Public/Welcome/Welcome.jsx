import React from 'react'
import './Welcome.css'
import {alumns_pecuario_cbta} from '../../../Image'
import Vision from '../../../Buttons/Vision/Vision'
import Mision from '../../../Buttons/Mision/Mision'
export default function Welcome() {
  return (
    <div className='container-welcome'>
      <div className='subcontainer-welcome'>
        <div className='sub-text'>
          <h2>Bienvenido al C.B.T.A.5</h2>
          <p>El Centro de Bachillerato Tecnológico Agropecuario No. 5 inicia sus actividades el 02 de octubre de 1972 en la ciudad de Huejutla de Reyes Hidalgo, se encuentra localizado al norte de la ciudad, sobre el Boulevard Adolfo López Mateos s/n colonia aviación civil. Es un gra privilegio poder forjar a las futuras generaciones desde hace ya aproximadamente 50 años y de esta manera estar contribuyendo a nuestra comunidad, el C.B.T.A. 5 de Huejutla, Hgo. ha formado técnicos de calidad, con un claro compromiso social. ¡Bienvenidos!</p>
          <div className='sub-buttons'>
            <Mision/>
            <Vision/>
          </div>
        </div>
        <div className='sub-img'>
          <img src={alumns_pecuario_cbta} alt='imagen 02'/>
        </div>
      </div>
    </div>
  )
}
