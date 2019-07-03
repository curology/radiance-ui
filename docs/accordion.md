# Accordion

## A list of items that allows each item's content to be expanded and collapsed by clicking its title bar.

### Usage

```jsx
import { Accordion } from 'radiance-ui';
```

<br>
The accordion component expands to reveal hidden information. They should be used when you need to fit a large amount of content but don't want to visually overwhelm the user.

#### Standard Accordion

The basic accordion for use on Curology's platform. Should be used whenever possible.

```jsx
<Accordion.Container>
  <Accordion
    title={<div>Title</div>}
    isOpen={false}
    onClick={() => {}}
  >
    <div>Expansion</div>
  </Accordion>
<Accordion.Container>
```

#### Standard Accordion

The basic accordion for use on Curology's platform. Should be used whenever possible.

```jsx
<Accordion
  title={<Accordion.Truncate>Title</Accordion.Truncate>}
  isOpen={false}
  onClick={() => {}}
>
  <div>Expansion</div>
</Accordion>
```

#### Accordion with Thumbnails

- **_Subcomponent through Dot Notation_**

The accordion style renders thumbnail images into the right hand side of the accordion header title bar. These thumbnail images represent images actually found in the content section of the accordion.

- **1 image:** Renders thumbnail of image

- **2 images:** Renders thumbnails of both images

- **3+ images:** Renders thumbnail of first image and a counter of additional images

Upon opening of the accordion, the thumbnail images should disapear from the title bar because they'll then be visible in the content container.

```jsx
import { Accordion } from 'radiance-ui';

<Accordion.Thumbnails photoSrcs={[]} />;
```

| prop      | propType             | required | default | description                                                                          |
| --------- | -------------------- | -------- | ------- | ------------------------------------------------------------------------------------ |
| photoSrcs | array of src strings | yes      | -       | An array of image src strings that Accordion.Thumbails will use to render thumbnails |

#### Disabled Accordion

The disabled accordion should only be used when the user is taking a clearly defined action in a series of tasks. A good example of this component is the photo uploader in the sign up flow. Accordion blocks which represent specific photos the user takes, remain disabled and closed until the respective steps are reached. The user is then auto-advanced through each accordion block.

```jsx
<Accordion disabled />
```

#### Truncated Accordion

- **_Subcomponent through Dot Notation_**

Prevents line-wrapping and shortens text with an ellipsis.

Note: The ellipsis will only be added if the text is a direct child.

```jsx
<Accordion disabled />
```

<!-- STORY -->

<!-- PROPS -->

<br>

### Subcomponents

The `<Accordion />` component has subcomponents available through dot notation.

#### Truncate

Prevents line-wrapping and shortens text with an ellipsis. Note: The ellipsis will only
be added if the text is a direct child.

```jsx
import { Accordion } from 'radiance-ui';

<Accordion.Truncate>Text to truncate</Accordion.Truncate>;
```

#### Container

Container to hold instances of `<Accordion>`

```jsx
import { Accordion } from 'radiance-ui';

<Accordion.Container>
  <Accordion {...props} />
  <Accordion {...props} />
  <Accordion {...props} />
</Accordion.Container>;
```

#### Content

Wraps padding around children nodes

```jsx
import { Accordion } from 'radiance-ui';

<Accordion
  title={<Accordion.Content>Title</Accordion.Content>}
  isOpen={true}
  onClick={() => {}}
>
  <Accordion.Content>Expansion with content padding</Accordion.Content>
</Accordion>;
```
