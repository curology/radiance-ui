import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { primaryTheme } from 'src/constants/themes';
import { ThemeProvider } from 'emotion-theming';

import Toggle from './index';

const ToggleWithTheme = (props) => (
  <ThemeProvider theme={primaryTheme}>
    <Toggle {...props} />
  </ThemeProvider>
);

describe('<Toggle />', () => {
  const labelText = 'Label Text';

  describe('UI snapshot', () => {
    it('renders the component', () => {
      const component = renderer.create(
        <ToggleWithTheme checked={false} label={labelText} />,
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('when label is undefined', () => {
    test('does not render a label component', () => {
      const wrapper = shallow(<ToggleWithTheme checked={false} />);
      expect(wrapper.html().indexOf('label') === -1).toBe(true);
    });
  });

  describe('when label is a string', () => {
    test('renders a text component', () => {
      const wrapper = shallow(
        <ToggleWithTheme checked={false} label={labelText} />,
      );

      expect(wrapper.html().indexOf(labelText) > 0).toBe(true);
    });
  });

  describe('when checkbox is clicked', () => {
    test('fires onChange function with correct argument when function exists', () => {
      const spy = jest.fn();
      const wrapper = mount(<ToggleWithTheme checked={false} onChange={spy} />);

      wrapper.find('[type="checkbox"]').simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });
});
