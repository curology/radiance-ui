# Form Components
### Usage

```jsx
import { Carousel } from 'radiance-ui';
import { SPACING, COLORS } from 'radiance-ui/lib/constants';

FORMS
```

<!-- STORY -->

### Proptypes
| prop                | propType   | required | default      | description                                                                                                                  
|---------------------|------------|----------|--------------|------------------------------------------------------------------------------------------------------------------------------|
| autoplay            | bool       | no       | false        | auto advance the carousel cards |
| autoplaySpeed       | number     | no       | 5000         | autoplay speed in milliseconds (ignored if autoplay is false) |
| carouselType        | string     | no       | 'primary'    | must be one of: 'primary', 'secondary' |
| centerMode          | bool       | no       | true         | center the current card |
| children            | node       | yes      | -            | array of `Carousel.Card` |
| hideArrows          | bool       | no       | false        | hide the arrows |
| hideDots            | bool       | no       | false        | hide the dots |
| infinite            | bool       | no       | false        | creates a carousel loop, i.e. if true you can go backwards form the begining |
| numCardsVisible     | number     | yes      | -            | number of visible cards, must be one of: 1, 2 or 3 |

### Notes