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
  describe('UI snapshots', () => {
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
  });

  it('invokes onClick when title is clicked', async () => {
    const spy = jest.fn();

    const { getByRole, user } = render(
      <Accordion {...testAccordionProps} onClick={spy} />,
    );

    await user.click(getByRole('button'));

    expect(spy).toHaveBeenCalled();
  });
});
