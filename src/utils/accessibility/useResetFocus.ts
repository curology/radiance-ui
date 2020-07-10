import { useRef } from 'react';

const useResetFocus = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  const resetFocus = () => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  return {
    initialFocus: ref,
    resetFocus,
  };
};

export default useResetFocus;
