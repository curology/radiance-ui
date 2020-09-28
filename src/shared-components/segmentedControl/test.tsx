import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import SegmentedControl from './index';

const testSegmentedControl = {
  segmentItems: [
    { id: 1, text: 'Tab 1' },
    { id: 2, text: 'Tab 2' },
    { id: 3, text: 'Tab 3' },
  ],
};
/* eslint-disable react/jsx-props-no-spreading */
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
    const buttonIndex = 2;

    const component = shallow(
      <SegmentedControl {...testSegmentedControl} onClick={spy} />,
    );
    const button = component.childAt(buttonIndex);

    button.simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
