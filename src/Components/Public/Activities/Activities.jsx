import React from 'react';
import './Activities.css';
import { atletismo_femenil,voleibol_femenil,futbol } from '../../../Image';

export default function Activities() {
  const handleNext = () => {
    const slide = document.getElementById('slide');
    slide.appendChild(slide.firstElementChild);
  };

  const handlePrev = () => {
    const slide = document.getElementById('slide');
    slide.prepend(slide.lastElementChild);
  };

  return (
    <div className="container-act">
      <div id="slide">
        <div className="item" style={{ backgroundImage: `url(${atletismo_femenil})` }}>
          <div className="content">
            <div className="name">Alumnos</div>
            <div className="des">Alumnos desfilaron del 20 de Nov</div>
            <button className='btx'>Ver más</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${voleibol_femenil})` }}>
          <div className="content">
            <div className="name">Voleibol</div>
            <div className="des"></div>
            <button className='btx'>Ver más</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${futbol})` }}>
          <div className="content">
            <div className="name">Equipo de futbol</div>
            <div className="des">Alumnos masculinos forman parte del equipo de futbol soccer</div>
            <button className='btx'>Ver más</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${futbol})` }}>
          <div className="content">
            <div className="name">Equipo de futbol</div>
            <div className="des">Alumnos masculinos forman parte del equipo de futbol soccer</div>
            <button className='btx'>Ver más</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${futbol})` }}>
          <div className="content">
            <div className="name">Equipo de futbol</div>
            <div className="des">Alumnos masculinos forman parte del equipo de futbol soccer</div>
            <button className='btx'>Ver más</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${futbol})` }}>
          <div className="content">
            <div className="name">Equipo de futbol</div>
            <div className="des">Alumnos masculinos forman parte del equipo de futbol soccer</div>
            <button className='btx'>Ver más</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${futbol})` }}>
          <div className="content">
            <div className="name">Equipo de futbol</div>
            <div className="des">Alumnos masculinos forman parte del equipo de futbol soccer</div>
            <button className='btx'>Ver más</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${futbol})` }}>
          <div className="content">
            <div className="name">Equipo de futbol</div>
            <div className="des">Alumnos masculinos forman parte del equipo de futbol soccer</div>
            <button className='btx'>Ver más</button>
          </div>
        </div>
      </div>
      <div className="buttonsx">
        <button className="b1" id="prev" onClick={handlePrev}>
          <ion-icon name="arrow-back-circle-outline"></ion-icon>
        </button>
        <button className="b1" id="next" onClick={handleNext}>
          <ion-icon name="arrow-forward-circle-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
}
