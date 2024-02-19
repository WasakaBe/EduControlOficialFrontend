/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './Carrusel.css';
import { panel_cbta, dance, alumns_docent } from '../../../Image';

const slides = [panel_cbta, dance, alumns_docent];

export default function Carrusel() {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (slideIndex + 1) % slides.length;
    setSlideIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = slideIndex === 0 ? slides.length - 1 : slideIndex - 1;
    setSlideIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <div className='carousel-container'>
      <div className='carousel'>
        {slides.map((slide, index) => (
          <img
            key={slide}
            src={slide}
            alt={`imagen ${index + 1}`}
            style={{ display: index === slideIndex ? 'block' : 'none' }}
          />
        ))}
      </div>
      <div className='buttons'>
        <button onClick={prevSlide}> <ion-icon name="caret-back-circle-outline"></ion-icon></button>
        <button onClick={nextSlide}> <ion-icon name="caret-forward-circle-outline"></ion-icon></button>
      </div>
    </div>
  );
}
