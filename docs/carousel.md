# Carousel

## Usage

```jsx
import { Carousel } from 'radiance-ui';
import { SPACER, COLORS } from 'radiance-ui/lib/constants';

const Card = styled(Carousel.Card)`
  background-color: ${COLORS.border};
  text-align: center;
  padding: ${SPACER.large};
`;

const cards = [
  <Card key={1}>Card 1</Card>,
  <Card key={2}>Card 2</Card>,
  <Card key={3}>Card 3</Card>,
  <Card key={4}>Card 4</Card>,
  <Card key={5}>Card 5</Card>,
];

// Default - 1 card
<Carousel numCardsVisible={1}>{cards}</Carousel>

// 2 cards - Infinite
<Carousel numCardsVisible={2} infinite>{cards}</Carousel>

// Default - 3 card
<Carousel numCardsVisible={3}>{cards}</Carousel>

// Autoplay - 5 seconds is default speed
<Carousel numCardsVisible={1} autoplay>{cards}</Carousel>

// Autoplay Infinite
<Carousel numCardsVisible={1} autoplay infinite>{cards}</Carousel>

// Hide Dots
<Carousel numCardsVisible={1} hideDots>{cards}</Carousel>

// Hide Arrows (swipe to navigate)
<Carousel numCardsVisible={1} hideArrows>{cards}</Carousel>

// Bottom Right Aligned Arrows
<Carousel numCardsVisible={2} bottomRightAlignedArrows>{cards}</Carousel>

// Secondary Style - dots are white
<Carousel numCardsVisible={1} carouselType="secondary">{cards}</Carousel>
```

<!-- STORY -->

### Proptypes

| prop                     | propType | required | default   | description                                                                  |
| ------------------------ | -------- | -------- | --------- | ---------------------------------------------------------------------------- |
| autoplay                 | bool     | no       | false     | auto advance the carousel cards                                              |
| autoplaySpeed            | number   | no       | 5000      | autoplay speed in milliseconds (ignored if autoplay is false)                |
| carouselType             | string   | no       | 'primary' | must be one of: 'primary', 'secondary'                                       |
| centerMode               | bool     | no       | true      | center the current card                                                      |
| children                 | node     | yes      | -         | array of `Carousel.Card`                                                     |
| hideDots                 | bool     | no       | false     | hide the dots                                                                |
| hideArrows               | bool     | no       | false     | hide the arrows                                                              |
| bottomRightAlignedArrows | bool     | no       | false     | align the arrows on the bottom right (dots are automatically hidden)         |
| infinite                 | bool     | no       | false     | creates a carousel loop, i.e. if true you can go backwards form the begining |
| numCardsVisible          | number   | yes      | -         | number of visible cards, must be one of: 1, 2 or 3                           |

### Notes

The property `numCardsVisible` will define the width of the Carousel Container.

An array of `Carousel.Card` must be used for the carousel content. It includes the base styles for the Card which may be extended as shown above.
