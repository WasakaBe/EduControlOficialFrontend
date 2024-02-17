import { useState } from 'react';

export const useApellidoPaternoValidation = () => {
  const [apellidoPaterno, setApellidoPaterno] = useState('');
  const [apellidoPaternoValido, setApellidoPaternoValido] = useState(true);

  const handleApellidoPaternoChange = (event) => {
    const inputValue = event.target.value;
    const regex = /^[a-zA-Z\sáéíóúüÜñÑÁÉÍÓÚ]*$/;
    const esValido = regex.test(inputValue) || inputValue === '';
    setApellidoPaterno(inputValue);
    setApellidoPaternoValido(esValido);
  };

  return {
    apellidoPaterno,
    apellidoPaternoValido,
    handleApellidoPaternoChange,
  };
};
