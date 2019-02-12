# LoadingSpinner
### Usage

```jsx
import { LoadingSpinner } from 'radiance-ui';

const SpinnerContainer = styled.div`
  position: relative;
`;

<React.Fragment>
  Default:
  <SpinnerContainer>
    <LoadingSpinner />
  </SpinnerContainer>
  <br />

  TranslateX as 50px:
  <SpinnerContainer>
    <LoadingSpinner translateX="50px" />
  </SpinnerContainer>
  <br />

  Duration as 4:
  <SpinnerContainer>
    <LoadingSpinner duration={4} />
  </SpinnerContainer>
</React.Fragment>
```

<!-- STORY -->

### Proptypes
| prop       | propType | required | default           | description                                                                                                        |
|------------|----------|----------|-------------------|--------------------------------------------------------------------------------------------------------------------|
| bgColor    | string   | no       | COLORS.background | background color of loading container                                                                              |
| color      | string   | no       | COLORS.primary    | color of loading dots                                                                                              |
| translateX | string   | no       | 100px             | distance dots will move horizontally                                                                               |
| duration   | number   | no       | 2                 | length of time for animation loop                                                                                  |
| size       | string   | no       | 14px              | size of loading dots                                                                                               |

### Notes
LoadingSpinner will cover the entirety of the container that holds it. The container should have `position: relative;` as part of its styling to prevent the LoadingSpinner from spilling outside the container.
