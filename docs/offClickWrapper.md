# OffClickWrapper
## Usage

```jsx
import { OffClickWrapper } from 'radiance-ui';

<OffClickWrapper onOffClick={this.handleOffClick}>
  <Container type="message">
    <Container.Section>
      Click outside this container to call the onOffClick handler...
    </Container.Section>
  </Container>
</OffClickWrapper>
```

<!-- STORY -->

### Proptypes
| prop                  | propType         | required | default   | description                                                                                                                  
|-----------------------|------------------|----------|-----------|------------------------------------------------------------------------------------------------------------------------------|
| children              | node             | yes     | -         | content/container that ignores clicks inside it |
| className             | string           | no      | -         | define the styles |
| onOffClick            | function         | yes     | -         | function that is call when clicking outside the offClickWrapper (`children` prop) |
