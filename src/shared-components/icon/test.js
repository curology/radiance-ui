import React from 'react';
import { shallow } from 'enzyme';

import Icon from './index';

describe('<Icon />', () => {
  test('renders as svg element', () => {
    window.__SVG_INLINE__ = true;
    const icon = shallow(<Icon iconName="first-aid" />);

    expect(icon.exists()).toBe(true);
    expect(icon.type()).toBe('svg');
    window.__SVG_INLINE__ = undefined;
  });

  test('renders expected props', () => {
    window.__SVG_INLINE__ = true;
    const icon = shallow(<Icon iconName="first-aid" />);

    expect(icon.find('use').prop('xlinkHref')).toBe('#first-aid');
    window.__SVG_INLINE__ = undefined;
  });
});

