import React from 'react'
import { NavAlum,CredentialAlumn } from '../../Components/Alumns'
import {Footer} from '../../Components/Public'
import Breadcrumb from '../../Constants/Breadcrumbs/Breadcrumbs'
export default function IndexAlumn() {
  return (
    <div>
      <NavAlum/>
      <div className='flex container mx-auto justify-center'>
        <Breadcrumb
          path={'Inicio'}
        />
      </div>
      <CredentialAlumn/>
      <Footer/>
    </div>
  )
}
