# FadeInContainer
### Usage

```jsx
import { FadeInContainer, Container } from 'radiance-ui';

<FadeInContainer slide>
  <Container type="message">
    <Container.Section>
      FadeInContainer has an opacity fade in animation on the inital render.<br />
      You can add the slide property for an extra slide in animation.
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
