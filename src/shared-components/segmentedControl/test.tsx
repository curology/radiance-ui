import React from 'react';
import { renderer } from 'src/tests/reactTestRendererHelpers';
import { mount } from 'src/tests/enzymeHelpers';

import { SegmentedControl } from './index';

const testSegmentedControl = {
  segmentItems: [
    { id: 1, text: 'Tab 1' },
    { id: 2, text: 'Tab 2' },
    { id: 3, text: 'Tab 3' },
  ],
};

describe('<SegmentedControl />', () => {
  test('renders a regular segmented control', () => {
    const component = renderer.create(
      <SegmentedControl {...testSegmentedControl} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('calls onClick when button is clicked', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <SegmentedControl {...testSegmentedControl} onClick={spy} />,
    );
    const button = wrapper.find('button').last();

    button.simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
