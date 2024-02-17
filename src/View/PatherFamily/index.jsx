import React from 'react'
import { HeaderFamily, NavbarFamily } from '../../Components/PatherFamily'
import {Footer} from '../../Components/Public'
import Breadcrumb from '../../Constants/Breadcrumbs/Breadcrumbs'
import {Helmet} from 'react-helmet'
export default function IndexFamily() {
  return (
    <div>
   <Helmet>
  <title>Inicio Familiar</title>
  <meta name="description" content="Bienvenido a la plataforma educativa de Tu Proyecto Escolar." />
  <meta name="keywords" content="educación, escuela, estudiantes, aprendizaje, plataforma educativa" />
  {/* Agrega más meta tags según sea necesario */}
</Helmet>
      <NavbarFamily/>
      <div className='flex container mx-auto justify-center'>
        <Breadcrumb
          path={'Inicio'}
        />
      </div>
      <HeaderFamily/>

      <Footer/>
    </div>
  )
}
