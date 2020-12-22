import React from 'react';
import { render, userEvent } from 'src/tests/testingLibraryHelpers';

import { Accordion } from './index';

const testAccordionProps = {
  title: <div>title</div>,
  isOpen: false,
  onClick: (): void => undefined,
  children: <div>expansion</div>,
};

describe('<Accordion />', () => {
  test('renders regular accordion', () => {
    const { container } = render(<Accordion {...testAccordionProps} />);

    expect(container.firstElementChild).toMatchSnapshot();
  });

  test('renders no border accordion', () => {
    const { container } = render(
      <Accordion {...testAccordionProps} noBorder />,
    );

    expect(container.firstElementChild).toMatchSnapshot();
  });

  test('renders disabled accordion', () => {
    const { container } = render(
      <Accordion {...testAccordionProps} disabled />,
    );

    expect(container.firstElementChild).toMatchSnapshot();
  });

  test('invokes onClick when title is clicked', () => {
    const spy = jest.fn();

    const { getByRole } = render(
      <Accordion {...testAccordionProps} onClick={spy} />,
    );

    userEvent.click(getByRole('button'));

    expect(spy).toHaveBeenCalled();
  });
});
