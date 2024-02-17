import React from 'react'
import {Navbar,Carrusel,Welcome,Inscription,Activities,Special,Footer, AcercaPublic,SchoolActivities, Contact, Blog} from '../../Components/Public'
import { TextActivities,Breadcrumbs } from '../../Constants'
export default function Index() {
  return (
    <div>
      <Navbar/>
      <div className='flex container mx-auto justify-center'>
        <Breadcrumbs
          path={''}
        />
      </div>
      <Carrusel/>
      <Welcome/> 
      <TextActivities/>
      <Activities/>
      <Inscription/>
      <SchoolActivities/>
      <AcercaPublic/>
      <Special/>
      <Contact/>
      <Blog/>
      <Footer/>
    </div>
  )
}
