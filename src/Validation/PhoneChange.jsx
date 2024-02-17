import { useState } from 'react';

export const useTelefonoValidation = () => {
  const [telefono, setTelefono] = useState('');
  const [telefonoValido, setTelefonoValido] = useState(true);

  const handleTelefonoChange = (event) => {
    const inputValue = event.target.value;
    const regexTelefono = /^\d{10}$/;
    const esValido = regexTelefono.test(inputValue) || inputValue === '';
    setTelefono(inputValue);
    setTelefonoValido(esValido);
  };

  return {
    telefono,
    telefonoValido,
    handleTelefonoChange,
  };
};
