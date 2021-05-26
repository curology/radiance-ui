/**
 * @jest-environment jsdom
 */

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
  it('renders regular accordion', () => {
    const { container } = render(<Accordion {...testAccordionProps} />);

    expect(container.firstElementChild).toMatchSnapshot();
  });

  it('renders no border accordion', () => {
    const { container } = render(
      <Accordion {...testAccordionProps} noBorder />,
    );

    expect(container.firstElementChild).toMatchSnapshot();
  });

  it('renders disabled accordion', () => {
    const { container } = render(
      <Accordion {...testAccordionProps} disabled />,
    );

    expect(container.firstElementChild).toMatchSnapshot();
  });

  it('invokes onClick when title is clicked', () => {
    const spy = jest.fn();

    const { getByRole } = render(
      <Accordion {...testAccordionProps} onClick={spy} />,
    );

    userEvent.click(getByRole('button'));

    expect(spy).toHaveBeenCalled();
  });
});
