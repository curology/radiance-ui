import React from 'react';
import { render } from 'src/tests/testingLibraryHelpers';

import { Carousel } from './index';

const cards = [<Carousel.Card key="card1">Card 1</Carousel.Card>];

describe('<Carousel />', () => {
  describe('UI snapshots', () => {
    it('renders with props', () => {
      const { container } = render(
        <Carousel numCardsVisible={1}>{cards}</Carousel>,
      );

      expect(container.firstChild).toMatchSnapshot();
    });

    it('renders with bottom right aligned arrows', () => {
      const { container } = render(
        <Carousel numCardsVisible={2} bottomRightAlignedArrows hideDots>
          {cards}
        </Carousel>,
      );

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
