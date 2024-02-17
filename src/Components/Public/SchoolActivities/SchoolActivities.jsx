import React from 'react'
import {useNavigate} from 'react-router-dom'
import './SchoolActivities.css'
import { logofutbol, logobasketball,logodance, logovoleibol, logomusical, logocorrer, logodibujo, logoajedres } from '../../../Image'
export default function SchoolActivities() {
const nav = useNavigate();

const linkFut = () =>{ nav('/Futbol');}
const linkBas = () =>{ nav('/Basquetbol');}
const linkDance = () =>{ nav('/Danza');}
const linkVolei = () =>{ nav('/Voleibol');}
const linkCanto = () =>{ nav('/Canto');}
const linkAtle = () =>{ nav('/Atletismo');}
const linkArte = () =>{ nav('/Arte');}
const linkAje = () =>{ nav('/Ajedrez');}

  return (
   <div className='container-school'>
      <div className='special-ctn-school'>
            <div className='circle-special-school'>
                <h3>Actividades</h3>
                <h2>Culturales</h2>
                <p>La institución educativa ofrece las siguientes Actividades Culturales</p>
            </div>
           <div className='logo-special-school'>
              <div className='logo-futbol' > <img src={logofutbol} alt='Futbol' title='Futbol Soccer'onClick={linkFut}/></div>
              <div className='logo-basketball'><img src={logobasketball} alt='Basketball' title='Basquetbol' onClick={linkBas}/></div>
              <div className='logo-dance'> <img src={logodance} alt='Dance'title='Danza' onClick={linkDance}/></div>
              <div className='logo-voleibol'> <img src={logovoleibol} alt='Voleibol' title='Voleibol' onClick={linkVolei}/></div>
              <div className='logo-canto'> <img src={logomusical} alt='Canto'title='Canto' onClick={linkCanto}/></div>
              <div className='logo-atletismo'> <img src={logocorrer} alt='Atletismo' title='Atletismo' onClick={linkAtle}/></div>
              <div className='logo-arte'> <img src={logodibujo} alt='Arte' title='Artes' onClick={linkArte}/></div>
              <div className='logo-ajedres'> <img src={logoajedres} alt='Ajedrez' title='Ajedrez' onClick={linkAje}/></div>
              </div>
      </div>
   </div>               
  )
}
