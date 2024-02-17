import { useState } from 'react';

export const useEdadValidation = () => {
  const [edad, setEdad] = useState('');
  const [edadValida, setEdadValida] = useState(true);

  const handleEdadChange = (event) => {
    const edadIngresada = parseInt(event.target.value, 10);
    const esValida =
      !isNaN(edadIngresada) &&
      edadIngresada >= 15 &&
      edadIngresada <= 80 &&
      /^\d+$/.test(event.target.value);

    setEdad(event.target.value);
    setEdadValida(esValida);
  };

  return {
    edad,
    edadValida,
    handleEdadChange,
  };
};
