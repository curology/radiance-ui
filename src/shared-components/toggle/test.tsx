import React from 'react';
import { render, screen, userEvent } from 'src/tests/testingLibraryHelpers';

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
      expect(container.querySelectorAll('label').length).toBe(0);
    });
  });

  describe('when label is a string', () => {
    test('renders a text component', () => {
      render(
        <Toggle checked={false} label={labelText} onChange={() => undefined} />,
      );

      expect(screen.getByText(labelText)).toMatchInlineSnapshot(`
        .emotion-0 {
          color: #524D6E;
          margin: 0;
          font-size: 1rem;
          line-height: 1.5rem;
          text-align: left;
          cursor: pointer;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          margin-right: 0.5rem;
        }

        <span
          class="emotion-0 emotion-1"
        >
          Label Text
        </span>
      `);
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
