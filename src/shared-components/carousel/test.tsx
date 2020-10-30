import React from 'react';
import renderer from 'react-test-renderer';
import { decorateWithThemeProvider } from 'tests/utils/decorateWithThemeProvider';

import { Carousel } from './index';

const cards = [<Carousel.Card key="card1">Card 1</Carousel.Card>];

describe('<Carousel />', () => {
  const DecoratedCarousel = decorateWithThemeProvider(Carousel);

  describe('UI snapshots', () => {
    it('renders with props', () => {
      const tree = renderer
        .create(
          <DecoratedCarousel numCardsVisible={1}>{cards}</DecoratedCarousel>,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('renders with bottom right aligned arrows', () => {
      const tree = renderer
        .create(
          <DecoratedCarousel
            numCardsVisible={2}
            bottomRightAlignedArrows
            hideDots
          >
            {cards}
          </DecoratedCarousel>,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
