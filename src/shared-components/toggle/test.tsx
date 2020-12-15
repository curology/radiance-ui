import React from 'react';
import { render, userEvent } from 'src/tests/testingLibraryHelpers';

import { Toggle } from './index';

describe('<Toggle />', () => {
  const labelText = 'Label Text';
  describe('UI snapshot', () => {
    it('renders the component', () => {
      const { container } = render(
        <Toggle checked={false} label={labelText} onChange={() => undefined} />,
      );

      expect(container.firstElementChild).toMatchSnapshot();
    });
  });

  describe('when label is undefined', () => {
    test('does not render a label component', () => {
      const { container } = render(
        <Toggle checked={false} onChange={() => undefined} />,
      );
      // TODO: Make <Label /> an actual label element, not a span, and use getByLabelText
      expect(container.querySelectorAll('span').length).toBe(0);
    });
  });

  describe('when label is a string', () => {
    test('renders a text component', () => {
      const { getByText } = render(
        <Toggle checked={false} label={labelText} onChange={() => undefined} />,
      );

      getByText(labelText);
    });
  });

  describe('when checkbox is clicked', () => {
    test('fires onChange function with correct argument when function exists', () => {
      const spy = jest.fn();
      const { getByRole } = render(<Toggle checked={false} onChange={spy} />);

      userEvent.click(getByRole('checkbox'));

      expect(spy).toHaveBeenCalledWith(false);
    });
  });
});
