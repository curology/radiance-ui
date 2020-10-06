import React from 'react';
import renderer from 'react-test-renderer';

import { Carousel } from './index';

const cards = [<Carousel.Card key="card1">Card 1</Carousel.Card>];

describe('<Carousel />', () => {
  describe('UI snapshots', () => {
    it('renders with props', () => {
      const tree = renderer
        .create(<Carousel numCardsVisible={1}>{cards}</Carousel>)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('renders with bottom right aligned arrows', () => {
      const tree = renderer
        .create(
          <Carousel numCardsVisible={2} bottomRightAlignedArrows hideDots>
            {cards}
          </Carousel>,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
