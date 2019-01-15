# Round Button
### Usage

```jsx
import { RoundButton } from 'radiance-ui';
import { CheckmarkIcon } from 'radiance-ui/lib/icons';

<React.Fragment>
  <RoundButton.Container multi>
    <RoundButton icon={<CheckmarkIcon />}>Primary</RoundButton>
    <RoundButton buttonType="secondary" icon={<ArrowRightIcon />}>
      Secondary
    </RoundButton>
  </RoundButton.Container>
  <RoundButton.Container multi>
    <RoundButton buttonType="tertiary" icon={<ArrowLeftIcon />}>
      Tertiary
    </RoundButton>
    <RoundButton buttonType="quaternary" icon={<ArrowRightIcon />}>
      Quaternary
    </RoundButton>
  </RoundButton.Container>
  <RoundButton.Container multi css="background-color: lavender">
    <RoundButton buttonType="quinary" icon={<CheckmarkIcon />}>
      Quinary
    </RoundButton>
  </RoundButton.Container>
  <RoundButton.Container multi>
    <RoundButton buttonType="tertiary" icon={<ArrowLeftIcon />} disabled>
      Disabled
    </RoundButton>
  </RoundButton.Container>

  <RoundButton.Container multi>
    <RoundButton icon={<ArrowLeftIcon />} loading>
      Primary Loading
    </RoundButton>
    <RoundButton buttonType="secondary" icon={<ArrowRightIcon />} loading>
      Secondary Loading
    </RoundButton>
  </RoundButton.Container>
  <RoundButton.Container multi>
    <RoundButton buttonType="tertiary" icon={<ArrowLeftIcon />} loading>
      Tertiary Loading
    </RoundButton>
    <RoundButton buttonType="quaternary" icon={<ArrowRightIcon />} loading>
      Quaternary Loading
    </RoundButton>
  </RoundButton.Container>
  <RoundButton.Container multi css="background-color: lavender">
    <RoundButton buttonType="quinary" icon={<ArrowLeftIcon />} loading>
      Quinary Loading
    </RoundButton>
  </RoundButton.Container>
</React.Fragment>
```

<!-- STORY -->

### Proptypes
| prop     | propType           | required | default | description                                                                                                                  |
|----------|--------------------|----------|---------|------------------------------------------------------------------------------------------------------------------------------|
| buttonType | string | no      | primary       | Determines the button's main style theme. Must be one of `primary`, `secondary`, `tertiary`, `quaternary`, `quinary`. |
| children | node | yes | - | node to be rendered inside the button.  Recommended to be the button text |
| disabled | bool               | no       | false   | when disabled, click listener will not be called and the UI will look disabled |
| icon | node | yes | null | icon to render in the button. Recommended to use one of Radiance's icons |
| loading  | bool               | no       | false   | renders loading state and prevents click listener from being called |
| onClick   | func              | no      | () => {} | callback function called on click of the button |
| textColor | string | no | '' | color (as a string) that will override existing text, icon, and loading colors for the button (except when disabled is true) |

### Notes
`<RoundButton />` behaves mostly the same as `<Button />` except that it
requires an `icon` prop since that is the main content placed with in
the round button. Any children of the component will be rendered
immediately below the round button.

`<RoundButton.Container>` can be used to wrap `<RoundButton />` components.
Since it has some opinions on width and spacing, the max number of
buttons you want to wrap is **2**.
