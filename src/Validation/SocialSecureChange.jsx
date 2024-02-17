import { useState } from 'react';

export const useSeguroSocialValidation = () => {
  const [seguroSocial, setSeguroSocial] = useState('');
  const [seguroSocialValido, setSeguroSocialValido] = useState(true);

  const handleSeguroSocialChange = (event) => {
    const inputValue = event.target.value;
    const regexSeguroSocial = /^\d{11}$/;
    const esValido = regexSeguroSocial.test(inputValue) || inputValue === '';
    setSeguroSocial(inputValue);
    setSeguroSocialValido(esValido);
  };

  return {
    seguroSocial,
    seguroSocialValido,
    handleSeguroSocialChange,
  };
};
