import { useState } from 'react';

export const useApellidoMaternoValidation = () => {
  const [apellidoMaterno, setApellidoMaterno] = useState('');
  const [apellidoMaternoValido, setApellidoMaternoValido] = useState(true);

  const handleApellidoMaternoChange = (event) => {
    const inputValue = event.target.value;
    const regex = /^[a-zA-Z\sáéíóúüÜñÑÁÉÍÓÚ]*$/;
    const esValido = regex.test(inputValue) || inputValue === '';
    setApellidoMaterno(inputValue);
    setApellidoMaternoValido(esValido);
  };

  return {
    apellidoMaterno,
    apellidoMaternoValido,
    handleApellidoMaternoChange,
  };
};
