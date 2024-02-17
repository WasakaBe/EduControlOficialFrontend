import { useState } from 'react';

export const useNombreValidation = () => {
  const [nombre, setNombre] = useState('');
  const [nombreValido, setNombreValido] = useState(true);

  const handleNombreChange = (event) => {
    const inputValue = event.target.value;
    const regex = /^[a-zA-Z\sáéíóúüÜñÑÁÉÍÓÚ]*$/;
    const esValido = regex.test(inputValue) || inputValue === '';
    setNombre(inputValue);
    setNombreValido(esValido);
  };

  return {
    nombre,
    nombreValido,
    handleNombreChange,
  };
};
