import React from 'react';
import { shallow } from 'enzyme';

import Icon from './index';

describe('<Icon />', () => {
  test('renders as svg element', () => {
    const icon = shallow(<Icon iconName="first-aid" />);

    expect(icon.exists()).toBe(true);
    expect(icon.type()).toBe('svg');
  });

  test('renders expected props', () => {
    const icon = shallow(<Icon iconName="first-aid" />);

    expect(icon.find('use').prop('xlinkHref')).toBe('#first-aid');
  });
});
