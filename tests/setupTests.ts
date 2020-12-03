import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime'; // Allows async in tests

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      dispatchEvent: () => false,
      addListener: () => undefined,
      removeListener: () => undefined,
      media: '',
      onchange: () => undefined,
      addEventListener: () => undefined,
      removeEventListener: () => undefined,
    };
  };
