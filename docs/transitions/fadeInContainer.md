# FadeInContainer
### Usage

```jsx
import { FadeInContainer, Container } from 'radiance-ui';

<FadeInContainer slide>
  <Container type="message">
    <Container.Section>
      FadeInContainer has an animation on the inital render. <br />
      You can use this in subcomponents to have a transition between app
      states.
    </Container.Section>
  </Container>
</FadeInContainer>
```

<!-- STORY -->

### Proptypes
| prop      | propType          | required | default    | description                                                                                                                  
|-----------|-------------------|----------|------------|---------------------------------|
| slide     | bool              | no       | false      | adds a slide in animation       |
| speed     | string            | no       | 350ms      | the animation transition speed  |
