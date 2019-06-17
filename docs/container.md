# Container
## Usage

```jsx
import { Container } from 'radiance-ui';

<Container>
  <Container.Image src="https://images.com/black.png" height="134" />

  <Container.Section>
    First section!
  </Container.Section>

  <Container.Divider />

  <Container.Section>
    Second section
  </Container.Section>
</Container>

<Container type="clickable">
  <Container.Section>
    Clickable container
  </Container.Section>
</Container>

<Container type="message">
  <Container.Section>
    Message container
  </Container.Section>
</Container>
```

<!-- STORY -->

### Proptypes
| prop     | propType           | required | default | description                                                                                                                  |
|----------|--------------------|----------|---------|------------------------------------------------------------------------------------------------------------------------------|
| type     | string             | no       | - | must be one of: 'message', 'clickable' |

### Notes
The `<Container />` component is mainly useful for base styles.

Within the container there are helper components that have very little opinion
except for spacing. The idea is that we encourage you to build out the
content of the `<Container />` component, but we have some helpful
default components you can use.

`<Container />` can take in a `type` prop that will change its
styling. Available types are `message` and `clickable`.
