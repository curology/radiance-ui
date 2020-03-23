# VerificationMessages

Verification messages help provide context and status within forms.

They should be short and explanative.

Verification message color should match the alert status, so they can either be `error` or `success`.

## Usage

```jsx
import { VerificationMessages, Field } from 'radiance-ui';

const messages = {
  required: (
    <React.Fragment>
      <strong>Uh oh!</strong> This field is required
    </React.Fragment>
  ),
  maxLength: (
    <React.Fragment>
      <strong>Uh oh!</strong> Must be at least 3 characters
    </React.Fragment>
  ),
  charactersRequired: ['Must contain 1 number', 'Must contain 1 symbol'],
};

<Field.Input />
<VerificationMessages centered messages={messages} />
```

<!-- STORY -->

### Proptypes

| prop     | propType | required | default | description                                                                                |
| -------- | -------- | -------- | ------- | ------------------------------------------------------------------------------------------ |
| centered | bool     | no       | false   | center the messages                                                                        |
| messages | object   | no       | -       | object of key and React Node message pair. It also accepts an array of React Node as value |
| type     | string   | no       | error   | one of `error` or `success`                                                                |
