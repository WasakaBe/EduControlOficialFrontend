import { useState } from 'react';

export const useAceptaTerminosValidation = () => {
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  const handleAceptaTerminosChange = (event) => {
    setAceptaTerminos(event.target.checked);
  };

  return {
    aceptaTerminos,
    handleAceptaTerminosChange,
  };
};
