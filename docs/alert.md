# Alert

Alerts should be used to show notifications or messages from (providers, support, or system)

They should show page-level success states.

We should avoid using alerts to show flow-level success states (i.e. Cancellation successful)

Alerts contain some visual marker, an icon `16px` or avatar `32px`

Alerts should have a **bolded** portion of the text that helps inform the user what the alert is about. The text should be short and preferably not extend more than 2 lines. Ellipses (...) can be used to truncate past 2 lines if setting the prop `truncateText`.

Alerts can contain a CTA section. These should be reserved for really important actions. These alerts persists until an action is taken.

## Usage

```jsx
import { Fragment } from 'react';
import { Alert } from 'radiance-ui';

<Alert.Container>
  <Alert content="Default Alert: it will disappear after 3 seconds" />
  <Alert
    content={
      <Fragment>
        <strong>Did you hear?</strong> we launched a sunscreen
      </Fragment>
    }
    duration="sticky"
  />
  <Alert
    content={
      <Fragment>
        <strong>Whoops!</strong> There was an error updating your address, pleas
        try again later
      </Fragment>
    }
    type="error"
    duration="sticky"
  />
  <Alert
    content={
      <Fragment>
        <strong>Success!</strong> your photos were accepted
      </Fragment>
    }
    type="success"
    duration="sticky"
  />
  <Alert
    content={
      <Fragment>
        <strong>New message from Jasmin:</strong> “Be sure to upload a few more
        photos so that we can continue with your treatment”
      </Fragment>
    }
    duration="sticky"
    avatarSrc={avatarImageSrc}
  />
  <Alert
    content={
      <Fragment>
        <strong>Whoops!</strong> There was an error updating your address, pleas
        try again later
      </Fragment>
    }
    type="error"
    ctaContent="Update Payment Method"
    onExit={() => alert('cta alert clicked')}
  />
</Alert.Container>;
```

<!-- STORY -->

### Proptypes

| prop         | propType         | required | default | description                                                                                                             |
| ------------ | ---------------- | -------- | ------- | ----------------------------------------------------------------------------------------------------------------------- |
| avatarSrc    | string           | no       | -       | to display a 32x32 small avatar instead of an icon                                                                      |
| content      | node             | yes      | -       | content of the alert                                                                                                    |
| ctaContent   | node             | no       | -       | content of the CTA section. The handler can be provided in the `onExit` prop                                            |
| duration     | number or string | no       | 3       | can be the string `sticky` for the alert to persist or a number in seconds before the alert is automatically dismissed  |
| truncateText | bool             | no       | false   | truncates text after 2 lines                                                                                            |
| type         | string           | no       | default | must be one of: 'success', 'error', 'default'                                                                           |
| onExit       | func             | no       | ()->{}  | function to be called on dismissal of the alert. The function will receive all of the component's props as the argument |

### Notes

The `<Alert />` component provides only the styling for and enter/exit
behavior for alerts. Management of what alerts are showing on the screen
must be handled from outside of this component.

All alerts are dimissable by clicking on them. However, you can use the
`duration` prop to determine if the alert is sticky or dismissed on a
timer (in units of seconds).
