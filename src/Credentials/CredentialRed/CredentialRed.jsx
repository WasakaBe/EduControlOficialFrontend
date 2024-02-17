import React from 'react'
import './CredentialRed.css'
import { Prog, fondoImagen, logoCbta, logoSEP } from '../../Image'

export default function CredentialRed() {
  return (
   <div>
   <div className='credencial-existens'>
       <div className='credencial-actual'>
           <div className='logoss'>
               <img className='logosep' src={logoSEP} alt='logo educacion'/>
               <img className='cbtalogo' src={logoCbta} alt='logo cbta'/>
           </div>
           <div className='imagens'>
               <img className='fotoAlumno' src={fondoImagen} alt='fondo foto estudiantil'/>
             
               <div className='namelgo'>
                   <p>Felipe Martinez Garcia</p>
                   <img className='carreralogo' src={Prog} alt='logo carrera'/>
               </div>
               
           </div>
     <div className='backCredencial2'>
           <div className='info-credencial'>
                 <h1>Tecnico En Sistemas de Produccion Agricola</h1>
                 <div className='groups-credencial'>
                     <h3>Grupo: </h3>
                     <span>A</span>
                 </div>
                 <div className='curp-credencial'>
                     <h3>CURP:</h3>
                     <span>TEDF060723HDFDRLA2</span>
                 </div>
                 <div className='curp-credencial'>
                     <h3>No. Control:</h3>
                     <span>22113010050406</span>
                 </div>
                 <div className='curp-credencial'>
                     <h3>Seguro Social:</h3>
                     <span>12345678901</span>
                 </div>
                 
             </div>
     </div>      
         

       </div>
   </div>

   
 </div>
  )
}
