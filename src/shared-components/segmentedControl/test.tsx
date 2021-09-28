import React from 'react';
import { render, userEvent } from 'src/tests/testingLibraryHelpers';

import { SegmentedControl } from './index';

const testSegmentedControl = {
  segmentItems: [
    { id: 1, text: 'Tab 1' },
    { id: 2, text: 'Tab 2' },
    { id: 3, text: 'Tab 3' },
  ],
};

describe('<SegmentedControl />', () => {
  it('renders a regular segmented control', () => {
    const { container } = render(
      <SegmentedControl {...testSegmentedControl} />,
    );

    expect(container.firstElementChild).toMatchSnapshot();
  });

  it('calls onClick when button is clicked', () => {
    const spy = jest.fn();

    const { getByRole } = render(
      <SegmentedControl {...testSegmentedControl} onClick={spy} />,
    );

    const button = getByRole('button', { name: 'Tab 3' });

    userEvent.click(button);
    expect(spy).toHaveBeenCalled();
  });
});
