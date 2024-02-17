import { useState } from 'react';

export const useCorreoValidation = () => {
  const [correo, setCorreo] = useState('');
  const [correoValido, setCorreoValido] = useState(true);

  const handleCorreoChange = (event) => {
    const inputValue = event.target.value;
    const regexCorreo = /^[a-zA-Z0-9._-ñÑ]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const esValido = regexCorreo.test(inputValue) || inputValue === '';
    setCorreo(inputValue);
    setCorreoValido(esValido);
  };

  return {
    correo,
    correoValido,
    handleCorreoChange,
  };
};
