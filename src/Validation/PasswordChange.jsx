import { useState } from 'react';

export const useContrasenaValidation = () => {
  const [contrasena, setContrasena] = useState('');
  const [contrasenaValida, setContrasenaValida] = useState(true);

  const handleContrasenaChange = (event) => {
    const inputValue = event.target.value;
    const regexMayuscula = /[A-Z-Ñ]/;
    const regexMinuscula = /[a-z-ñ]/;
    const regexNumero = /[0-9]/;
    const regexEspecial = /[!@#$%^&*(),.?":{}|<>]/;
    const esValida =
      inputValue.length >= 8 &&
      regexMayuscula.test(inputValue) &&
      regexMinuscula.test(inputValue) &&
      regexNumero.test(inputValue) &&
      regexEspecial.test(inputValue);
    setContrasena(inputValue);
    setContrasenaValida(esValida);
  };

  return {
    contrasena,
    contrasenaValida,
    handleContrasenaChange,
  };
};
