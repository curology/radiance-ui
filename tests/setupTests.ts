import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom';

configure({ adapter: new Adapter() });

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
