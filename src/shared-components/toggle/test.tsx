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
    it('does not render a label component', () => {
      const { container } = render(
        <Toggle checked={false} onChange={() => undefined} />,
      );
      // TODO: Make <Label /> an actual label element and use @testing-library/react selector
      expect(container.querySelectorAll('span')).toHaveLength(0);
    });
  });

  describe('when label is a string', () => {
    it('renders a text component', () => {
      const { getByText } = render(
        <Toggle checked={false} label={labelText} onChange={() => undefined} />,
      );

      expect(getByText(labelText)).toBeTruthy();
    });
  });

  describe('when checkbox is clicked', () => {
    it('fires onChange function with correct argument when function exists', () => {
      const spy = jest.fn();
      const { getByRole } = render(<Toggle checked={false} onChange={spy} />);

      userEvent.click(getByRole('checkbox'));
      expect(spy).toHaveBeenCalledWith(false);
    });
  });
});
