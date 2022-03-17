import React from 'react';
import { render } from 'src/tests/testingLibraryHelpers';

import './matchMedia.mock';
import { Carousel } from './index';

const cards = [
  <Carousel.Card key="card1">Card 1</Carousel.Card>,
  <Carousel.Card key="card2">Card 2</Carousel.Card>,
  <Carousel.Card key="card3">Card 3</Carousel.Card>,
];

describe('<Carousel />', () => {
  /**
   * TODO: Fix Emotion 11 CI snapshot serializer order issue
   */
  // eslint-disable-next-line jest/no-disabled-tests
  describe('UI snapshots', () => {
    it('renders with props', () => {
      const { container } = render(
        <Carousel numCardsVisible={1}>{cards}</Carousel>,
      );

      expect(container.firstElementChild).toMatchSnapshot();
    });

    it('renders with bottom right aligned arrows', () => {
      const { container } = render(
        <Carousel
          numCardsVisible={2}
          bottomRightAlignedArrows
          hideDots
        >
          {cards}
        </Carousel>,
      );

      expect(container.firstElementChild).toMatchSnapshot();
    });
  });
});
