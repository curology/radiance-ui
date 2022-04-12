import React from 'react';
import { render } from 'src/tests/testingLibraryHelpers';

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

  it('calls onClick when button is clicked', async () => {
    const spy = jest.fn();

    const { getByRole, user } = render(
      <SegmentedControl {...testSegmentedControl} onClick={spy} />,
    );

    const button = getByRole('button', { name: 'Tab 3' });

    await user.click(button);
    expect(spy).toHaveBeenCalled();
  });
});
