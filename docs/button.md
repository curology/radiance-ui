# Button
### Usage

```jsx
import { Button } from 'radiance-ui';

<Button.Container>
  <Button
    text="Your photos were uploaded successfully!"
    type="success"
    duration={4}
    onExit={() => {}}
  />
</Button.Container>
```

<!-- STORY -->

### Proptypes
| prop     | propType           | required | default | description                                                                                                                  |
|----------|--------------------|----------|---------|------------------------------------------------------------------------------------------------------------------------------|
| buttonType | string | no      | primary       | Determines the button's main style theme. Must be one of `primary`, `secondary`, `tertiary`, `quaternary`. |
| children | node | yes | - | node to be rendered inside the button.  Recommended to be the button text |
| disabled | bool               | no       | false   | when disabled, click listener will not be called and the UI will be updated |
| icon | node | no | null | icon to render in the button. Recommended to use one of Radiance's icons |
| loading  | bool               | no       | false   | renders loading state and prevents click listner from being called |
| onClick   | func              | no      | () => {} | callback function called on click of the button |

### Notes
Buttons can be used as a main call-to-action (CTA). Try to avoid using
buttons of the same `buttonType` next to each other since we want to
guide the user towards one option.

`<Button.Container>` can be used to provide spacing between multiple
buttons and behavior on various screen sizes. See the dedicated
Readme/Story for more details.
