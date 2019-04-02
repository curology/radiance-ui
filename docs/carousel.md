# Carousel
### Usage

```jsx
import { Carousel } from 'radiance-ui';

const cards = [
  <Carousel.Card key={1}>Card 1</Carousel.Card>,
  <Carousel.Card key={2}>Card 2</Carousel.Card>,
  <Carousel.Card key={3}>Card 3</Carousel.Card>,
  <Carousel.Card key={4}>Card 4</Carousel.Card>,
  <Carousel.Card key={5}>Card 5</Carousel.Card>,
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

// Secondary Style - dots are white
<Carousel numCardsVisible={1} carouselType="secondary">{cards}</Carousel>
```

<!-- STORY -->

### Proptypes
| prop                | propType   | required | default      | description                                                                                                                  
|---------------------|------------|----------|--------------|------------------------------------------------------------------------------------------------------------------------------|
| autoplay            | bool       | no       | false        | auto advance the carousel cards |
| autoplaySpeed       | number     | no       | 5000         | autoplay speed in milliseconds (ignored if autoplay is false) |
| carouselType        | string     | no       | 'primary'    | must be one of: 'primary', 'secondary' |
| centerMode          | bool       | no       | true         | center the current card |
| children            | node       | yes      | -            | carousel content (e.g: cards or images) |
| hideArrows          | bool       | no       | false        | hide the arrows |
| hideDots            | bool       | no       | false        | hide the dots |
| infinite            | bool       | no       | false        | creates a carousel loop, i.e. if true you can go backwards form the begining |
| numCardsVisible     | number     | yes      | -            | number of visible cards, must be one of: 1, 2 or 3 |

### Notes
The property `numCardsVisible` will define the width of the Carousel Container