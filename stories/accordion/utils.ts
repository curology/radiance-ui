import { useState } from 'react';

export const useAccordionState = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => setIsOpen(!isOpen);

  return { isOpen, onClick };
};
