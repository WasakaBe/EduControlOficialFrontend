import React from 'react'
import "./Special.css"
import { Admin,Agri,Agro,Alim,Cont,Dess,Ofit,Prog } from '../../../Image'
export default function Special() {
  return (
    <div className='container-special'>
      <div className='special-ctn'>
            <div className='circle-special'>
                <h3>Carreras</h3>
                <h2>Técnicas</h2>
                <p>La institución educativa ofrece las siguientes carreras técnicas</p>
            </div>
            <div className='logo-special'>
                <div className='logo-admin'>
                 <img src={Admin} alt='Administracion'/>
                  <div className='dates-admin'>
                      <h2>TÉCNICO EN ADMINISTRACIÓN PARA EL EMPRENDIMIENTO AGROPECUARIO</h2>
                      <button>Ver más</button>
                  </div>
              </div>
              <div className='logo-agricola'>
                 <img src={Agri} alt='Agricola'/>
                 <div className='dates-agricola'>
                      <h2>TÉCNICO EN SISTEMAS DE PRODUCCIÓN AGRÍCOLA</h2>
                      <button>Ver más</button>
                  </div>
              </div>
              <div className='logo-agro'>
                 <img src={Agro} alt='Agropecuaria'/>
                 <div className='dates-agro'>
                      <h2>TÉCNICO EN SISTEMAS DE AGROPECUARIA</h2>
                      <button>Ver más</button>
                  </div>
              </div>
              <div className='logo-alim'>
                 <img src={Alim} alt='Alimentos'/>
                 <div className='dates-alim'>
                      <h2>TÉCNICO EN PRODUCCIÓN INDUSTRIAL DE ALIMENTOS</h2>
                      <button>Ver más</button>
                  </div>
              </div>
              <div className='logo-cont'>
                 <img src={Cont} alt='Contabilidad'/>
                 <div className='dates-cont'>
                      <h2>TÉCNICO EN CONTABILIDAD</h2>
                      <button>Ver más</button>
                  </div>
              </div>
              <div className='logo-des'>
                 <img src={Dess} alt='Desarrollo'/>
                 <div className='dates-des'>
                      <h2>TÉCNICO EN DESARROLLO INTEGRAL COMUNITARIO</h2>
                      <button>Ver más</button>
                  </div>
              </div>
              <div className='logo-ofit'>
                 <img src={Ofit} alt='Ofimatica'/>
                 <div className='dates-ofit'>
                      <h2>TÉCNICO EN OFIMÁTICA</h2>
                      <button>Ver más</button>
                  </div>
              </div>
              <div className='logo-prog'>
                 <img src={Prog} alt='Programacion'/>
                 <div className='dates-prog'>
                      <h2>TÉCNICO EN PROGRAMACIÓN</h2>
                      <button>Ver más</button>
                  </div>
              </div>
              
            </div>
            

      </div>
      
    </div>
  )
}
