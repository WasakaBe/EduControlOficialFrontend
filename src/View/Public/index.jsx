import React from 'react'
import {Navbar,Carrusel,Welcome,Inscription,Activities,Special,Footer, AcercaPublic,SchoolActivities, Contact, Blog, Navbar2} from '../../Components/Public'
import { TextActivities,Breadcrumbs } from '../../Constants'
export default function Index() {
  return (
    <div>
      <Navbar2/>
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
