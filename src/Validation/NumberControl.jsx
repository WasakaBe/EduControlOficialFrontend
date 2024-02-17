import { useState } from 'react';

export const useNumeroControlValidation = () => {
  const [numeroControl, setNumeroControl] = useState('');
  const [numeroControlValido, setNumeroControlValido] = useState(true);

  const handleNumeroControlChange = (event) => {
    const inputValue = event.target.value;
    const regexNumeroControl = /^[0-9]{16}$/;
    const esValido = regexNumeroControl.test(inputValue) || inputValue === '';
    
    setNumeroControl(inputValue);
    setNumeroControlValido(esValido);
  };

  return {
    numeroControl,
    numeroControlValido,
    handleNumeroControlChange,
  };
};
