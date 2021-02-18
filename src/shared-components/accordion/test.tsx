import React, { useState } from 'react';
import { render, userEvent } from 'src/tests/testingLibraryHelpers';

import { Accordion } from './index';

const testAccordionProps = {
  title: <div>title</div>,
  isOpen: false,
  onClick: (): void => undefined,
  children: <div>expansion</div>,
};

const TestAccordionExpansion = () => {
  const [isOuterOpen, setIsOuterOpen] = useState(false);
  const [isInnerOpen, setIsInnerOpen] = useState(false);

  return (
    <Accordion
      title={<div>title</div>}
      isOpen={isOuterOpen}
      onClick={() => setIsOuterOpen(true)}
    >
      <div style={{ height: '200px' }}>I should be visible!</div>

      <Accordion
        title={<div>title</div>}
        isOpen={isInnerOpen}
        onClick={() => setIsInnerOpen(true)}
      >
        <div style={{ height: '1000px' }} />
      </Accordion>

    </Accordion>
  );
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

  test('updates height when child component height changes', () => {
    const container = render(<TestAccordionExpansion />);

    // Expect container height to equal that of the outer closed accordion

    // Open the outer accordion

    // Expect the container height to equal outer accordion div text + inner closed accordion

    // Open inner accordion

    // Expect container height to equal outer accordion div text + inner accordion div text
  });
});
