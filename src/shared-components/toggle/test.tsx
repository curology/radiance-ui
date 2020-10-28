import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { decorateWithThemeProvider } from 'tests/utils/decorateWithThemeProvider';

import { Toggle } from './index';

describe('<Toggle />', () => {
  const labelText = 'Label Text';
  const DecoratedToggle = decorateWithThemeProvider(Toggle);

  describe('UI snapshot', () => {
    it('renders the component', () => {
      const component = renderer.create(
        <DecoratedToggle
          checked={false}
          label={labelText}
          onChange={() => undefined}
        />,
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('when label is undefined', () => {
    test('does not render a label component', () => {
      const wrapper = shallow(
        <DecoratedToggle checked={false} onChange={() => undefined} />,
      );
      expect(wrapper.html().indexOf('label') === -1).toBe(true);
    });
  });

  describe('when label is a string', () => {
    test('renders a text component', () => {
      const wrapper = shallow(
        <DecoratedToggle
          checked={false}
          label={labelText}
          onChange={() => undefined}
        />,
      );

      expect(wrapper.html().indexOf(labelText) > 0).toBe(true);
    });
  });

  describe('when checkbox is clicked', () => {
    test('fires onChange function with correct argument when function exists', () => {
      const spy = jest.fn();
      const wrapper = mount(<DecoratedToggle checked={false} onChange={spy} />);

      wrapper.find('[type="checkbox"]').simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });
});
