# Carousel
### Usage

```jsx
import { Carousel } from 'radiance-ui';
import { CAROUSEL_CONTAINER_SIZES } from 'radiance-ui/lib/constants';

<div style={{maxWidth: CAROUSEL_CONTAINER_SIZES.threeCards}}>
  <Carousel numCardsVisible={3}>
    <div>Card 1</div>
    <div>Card 2</div>
    <div>Card 3</div>
    <div>Card 4</div>
    <div>Card 5</div>
  </Carousel>
</div>
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
| numCardsVisible     | number     | yes      | -            | number of visible cards |

### Notes
You must define a container that wraps the Carousel component with the `max-width` Style set to one of the 3 constants defined in CAROUSEL_CONTAINER_SIZES: `oneCard, twoCards, threeCards`. This value must match the number of visible cards defined by the property `numCardsVisible`.