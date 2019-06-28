# Button

## Usage

```jsx
import { Button } from 'radiance-ui';
import { CheckmarkIcon } from 'radiance-ui/lib/icons';

<React.Fragment>
  <Button.Container>
    <Button>Primary Button</Button>
    <Button buttonType="secondary">Secondary Button</Button>
    <Button buttonType="tertiary">Tertiary Button</Button>
    <Button buttonType="quaternary">Quaternary Button</Button>
    <Button disabled>Disabled Button</Button>
    <Button fullWidth>Full Width Button</Button>

    <Button isLoading>Primary Loading</Button>
    <Button isLoading buttonType="secondary">
      Secondary Loading
    </Button>
    <Button buttonType="tertiary" isLoading>
      Tertiary Loading
    </Button>
    <Button buttonType="quaternary" isLoading>
      Quaternary Loading
    </Button>
    <Button fullWidth isLoading>
      Full Width Loading
    </Button>
  </Button.Container>

  <Button.Container>
    <Button icon={<CheckmarkIcon />}>Primary Button</Button>
    <Button buttonType="secondary" icon={<CheckmarkIcon />}>
      Secondary Button
    </Button>
    <Button buttonType="tertiary" icon={<CheckmarkIcon />}>
      Tertiary Button
    </Button>
    <Button buttonType="quaternary" icon={<CheckmarkIcon />}>
      Quaternary Button
    </Button>
    <Button disabled icon={<CheckmarkIcon />}>
      Disabled Button
    </Button>
    <Button fullWidth icon={<CheckmarkIcon />}>
      Full Width Button
    </Button>

    <Button isLoading icon={<CheckmarkIcon />}>
      Primary Loading
    </Button>
    <Button isLoading buttonType="secondary" icon={<CheckmarkIcon />}>
      Secondary Loading
    </Button>
    <Button isLoading buttonType="tertiary" icon={<CheckmarkIcon />}>
      Tertiary Loading
    </Button>
    <Button isLoading buttonType="quaternary" icon={<CheckmarkIcon />}>
      Quaternary Loading
    </Button>
    <Button isLoading fullWidth icon={<CheckmarkIcon />}>
      Full Width Loading
    </Button>
  </Button.Container>
</React.Fragment>;
```

<!-- STORY -->

### Proptypes

| prop       | propType | required | default  | description                                                                                                                  |
| ---------- | -------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| buttonType | string   | no       | primary  | Determines the button's main style theme. Must be one of `primary`, `secondary`, `tertiary`, `quaternary`.                   |
| children   | node     | yes      | -        | node to be rendered inside the button. Recommended to be the button text                                                     |
| disabled   | bool     | no       | false    | when disabled, click listener will not be called and the UI will look disabled                                               |
| icon       | node     | no       | null     | icon to render in the button. Recommended to use one of Radiance's icons                                                     |
| isLoading  | bool     | no       | false    | renders loading state and prevents click listener from being called                                                          |
| onClick    | func     | no       | () => {} | callback function called on click of the button                                                                              |
| textColor  | string   | no       | ''       | color (as a string) that will override existing text, icon, and loading colors for the button (except when disabled is true) |

### Notes

Buttons can be used as a main call-to-action (CTA). Try to avoid using
buttons of the same `buttonType` next to each other since we want to
guide the user towards one option.

`<Button.Container>` can be used to provide spacing between multiple
buttons and behavior on various screen sizes. See the dedicated
Readme/Story for more details.
