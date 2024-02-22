import { useState } from 'react';

export const useFechaNacimientoValidation = () => {
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [fechaNacimientoValida, setFechaNacimientoValida] = useState(true);

  const handleFechaNacimientoChange = (event) => {
    const inputValue = event.target.value;
    // Puedes ajustar la siguiente expresión regular según tus necesidades específicas
    const regexFechaNacimiento = /^\d{4}-\d{2}-\d{2}$/;
    const esValido = regexFechaNacimiento.test(inputValue) || inputValue === '';
    setFechaNacimiento(inputValue);
    setFechaNacimientoValida(esValido);
  };

  return {
    fechaNacimiento,
    fechaNacimientoValida,
    handleFechaNacimientoChange,
  };
};
