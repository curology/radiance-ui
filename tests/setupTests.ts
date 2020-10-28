import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
configure({ adapter: new Adapter() });

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: () => undefined,
      removeListener: () => undefined,
    };
  };
