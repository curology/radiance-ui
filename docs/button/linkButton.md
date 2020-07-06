# LinkButton

## Usage

```jsx
import { LinkButton } from 'radiance-ui';

<React.Fragment>
  <LinkButton.Container>
    <LinkButton href="#">Primary</LinkButton>

    <LinkButton buttonType="secondary" href="#">
      Secondary
    </LinkButton>

    <LinkButton buttonType="tertiary" href="#">
      Tertiary
    </LinkButton>

    <LinkButton buttonType="quaternary" href="#">
      Quaternary
    </LinkButton>

    <LinkButton disabled href="#">
      I am Disabled
    </LinkButton>
  </LinkButton.Container>
</React.Fragment>;
```

#### React Router Link

```jsx
import { LinkButton } from 'radiance-ui';
import { Link } from 'react-router';

<LinkButton to="/somepath" as={Link}>
  Router Link
</LinkButton>;
```

#### With Color

```jsx
import { LinkButton } from 'radiance-ui';
import { COLORS } from 'radiance-ui/lib/constants';

<React.Fragment>
  <LinkButton.Container>
    <LinkButton
      buttonColor={COLORS.statusRed}
      href="https://www.latlmes.com/arts/return-of-the-golden-age-of-comics-1"
    >
      Primary
    </LinkButton>
    <LinkButton buttonColor={COLORS.statusRed} buttonType="secondary">
      Secondary
    </LinkButton>
    <LinkButton buttonColor={COLORS.statusRed} buttonType="tertiary">
      Tertiary
    </LinkButton>
    <LinkButton buttonColor={COLORS.statusRed} buttonType="quaternary">
      Quaternary
    </LinkButton>
    <LinkButton buttonColor={COLORS.statusRed} disabled>
      Disabled
    </LinkButton>
  </LinkButton.Container>
</React.Fragment>;
```

<!-- STORY -->

### Proptypes

| prop        | propType             | required | default  | description                                                                                                                  |
| ----------- | -------------------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| as          | "a", "span", element | no       | "a"      | Specifies the tag or element to be rendered.                                                                                 |
| buttonType  | string               | no       | primary  | Determines the button's main style theme. Must be one of `primary`, `secondary`, `tertiary`.                                 |
| buttonColor | string               | no       | primary  | Determines the color of the button . Must be one of the predefined colors (e.g. `primary`, `statusRed`, `statusGreen`, etc). |
| children    | node                 | yes      | -        | node to be rendered inside the button. Recommended to be the button text                                                     |
| disabled    | bool                 | no       | false    | when disabled, click listener will not be called and the UI will look disabled                                               |
| onClick     | func                 | no       | () => {} | callback function called on click of the button                                                                              |
| textColor   | string               | no       | ''       | color (as a string) that will override existing text, icon, and loading colors for the button (except when disabled is true) |

### Notes

`LinkButton` will render a 'button-like' link for directing/linking to the path
specified. This component can work with React Router's `Link`/`NavLink` by passing
in the router component as a prop ---> `<LinkButton to='/path' as={Link}> ....`.

`<LinkButton.Container>` can be used to provide spacing between multiple
buttons and behavior on various screen sizes.

We should generally try to use the default button color when possible. Only for special cases should we need to use a different button color.
