import React from 'react'
import './CredentialRed.css'
import { Prog, fondoImagen, logoCbta, logoSEP } from '../../Image'

export default function CredentialRed() {
  return (
   <div className='card-credential'>
        <div className='section-logos'>
            <img className='logosep' src={logoSEP} alt='logo de la SEP'/>
            <img className='logocbta' src={logoCbta} alt='logo de la Cbta'/>
        </div>
        <div className='backgroundFondo2'>
        <div className='section-photos'>
            <img className='photo' src={fondoImagen} alt='fondo de imagen'/>
                <div className='sect-dates-p'>
                    <h2>Javier De Jesus Martinez Monserrat</h2>
                    <img className='photo-carrera' src={Prog} alt='logo de la carrera'/>
                </div>
        </div>
    
        <div className='section-dates-credentials'>
            <h3>Tecnico En Sistemas De Produccion Agricola</h3>
            <div className='group-dates'>
                <h4>Grupo: </h4>
                <span>A</span>
            </div>
        </div>
        <div className='section-dates-credentials'>
            <div className='group-dates'>
                <h4>CURP: </h4>
                <span>AAAA000000AAAAAAA1</span>
            </div>
            <div className='group-dates'>
                <h4>No Control: </h4>
                <span>1234567890123456</span>
            </div>
            <div className='group-dates'>
                <h4>Seguro Social: </h4>
                <span>12345678901</span>
            </div>
        </div>

        </div>
      
   </div>
  )
}
