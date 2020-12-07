import React from 'react';
import { render } from 'src/tests/testingLibraryHelpers';

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

    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders no border accordion', () => {
    const { container } = render(
      <Accordion {...testAccordionProps} noBorder />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders disabled accordion', () => {
    const { container } = render(
      <Accordion {...testAccordionProps} disabled />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('invokes onClick when title is clicked', () => {
    const spy = jest.fn();

    const { getByRole } = render(
      <Accordion {...testAccordionProps} onClick={spy} />,
    );

    const title = getByRole('button');

    title.click();
    expect(spy).toHaveBeenCalled();
  });
});
