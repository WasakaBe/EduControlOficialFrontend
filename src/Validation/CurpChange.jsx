import { useState } from 'react';

export const useCurpValidation = () => {
  const [curp, setCurp] = useState('');
  const [curpValido, setCurpValido] = useState(true);

  const handleCurpChange = (event) => {
    const inputValue = event.target.value;
    const regexCurp = /^[A-Z]{4}[0-9]{6}[HM]{1}[A-Z]{6}[0-9]{1}$/;
    const esValido = regexCurp.test(inputValue) || inputValue === '';
    setCurp(inputValue);
    setCurpValido(esValido);
  };

  return {
    curp,
    curpValido,
    handleCurpChange,
  };
};
