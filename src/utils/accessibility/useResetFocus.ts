import { useRef } from 'react';

/**
 * Returns a ref and a function for sending focus to the ref's DOM element.
 * Useful for moving keyboard focus after an event.
 * @example
 * const { initialFocus, resetFocus } = useResetFocus();
 * return (
 *  <React.Fragment>
 *    <button ref={initialFocus}>First Button</button>
 *    <button onClick={() => resetFocus() }>Click Here to send focus to the First Button!</button>
 *  </React.Fragment>
 * );
 *  */
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
