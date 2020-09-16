# Accordion

A list of items that allows each item's content to be expanded and collapsed by clicking its title bar.

## Usage

```jsx
import { Accordion } from 'radiance-ui';
```

<br>
The accordion component expands to reveal hidden information. They should be used when you need to fit a large amount of content but don't want to visually overwhelm the user.

<!-- STORY -->

<!-- PROPS -->

<br>

### Standard Accordion

Basic accordion styling, contains standard border, shadow and padding.

```jsx
<Accordion.Grouping>
  <Accordion.Container>
    <Accordion
      title={
        <Accordion.Content>
          This is styled with Accordion.Content
        </Accordion.Content>
      }
    >
      <Accordion.Content>
        Accordion.Content adds standard accordion padding.
      </Accordion.Content>
    </Accordion>
  </Accordion.Container>
</Accordion.Grouping>
```

### Accordion - No Border

This accordion style permits usage without the border typically found on the accordion

```jsx
<Accordion.Grouping>
  <Accordion.Container>
    <Accordion
      title={
        <Accordion.Content>This is Accordion with noBorder</Accordion.Content>
      }
      noBorder
    >
      <Accordion.Content>
        This is styled with Accordion.Content
      </Accordion.Content>
    </Accordion>
  </Accordion.Container>
</Accordion.Grouping>
```

### Accordion with Thumbnails

- **_Subcomponent through Dot Notation_**

The accordion style renders thumbnail images into the right hand side of the accordion header title bar. These thumbnail images represent images actually found in the `content` section of the accordion.

- **1 image:** Renders thumbnail of image

- **2 images:** Renders thumbnails of both images

- **3+ images:** Renders thumbnail of first image and a counter of additional images

Upon opening of the accordion, the thumbnail images should disappear from the title bar because they'll then be visible in the `content` container.

```jsx
import { Accordion } from 'radiance-ui';

<Accordion.Thumbnails photoSrcs={[]} />;
```

| prop      | propType             | required | default | description                                                                          |
| --------- | -------------------- | -------- | ------- | ------------------------------------------------------------------------------------ |
| photoSrcs | array of src strings | yes      | -       | An array of image src strings that Accordion.Thumbails will use to render thumbnails |

### Disabled Accordion

The disabled accordion should only be used when the user is taking a clearly defined action in a series of tasks. A good example of this component is the photo uploader in the sign up flow. Accordion blocks which represent specific photos the user takes, remain disabled and closed until the respective steps are reached. The user is then auto-advanced through each accordion block.

```jsx
<Accordion.Grouping>
  <Accordion.Container>
    <Accordion
      title={
        <Accordion.Content>This is a disabled accordion</Accordion.Content>
      }
      disabled
    >
      <Accordion.Content>Expandable</Accordion.Content>
    </Accordion>
  </Accordion.Container>
</Accordion.Grouping>
```

### Right-aligned Arrow Accordion

```jsx
<Accordion.Grouping>
  <Accordion.Container>
    <Accordion
      title={
        <Accordion.Content>This is a right aligned arrow</Accordion.Content>
      }
      rightAlignArrow
    >
      <Accordion.Content>Expandable</Accordion.Content>
    </Accordion>
  </Accordion.Container>
</Accordion.Grouping>
```

<br>

## Subcomponents

The `<Accordion />` component has subcomponents available through dot notation.

### Container

Container to hold instances of `<Accordion>`

```jsx
import { Accordion } from 'radiance-ui';

<Accordion.Grouping>
  <Accordion.Container>
    <Accordion
      title={
        <Accordion.Content>
          This Accordion styled with an Accordion.Container parent component
        </Accordion.Content>
      }
    >
      <Accordion.Content>
        This Accordion styled with an Accordion.Container parent component
      </Accordion.Content>
    </Accordion>
  </Accordion.Container>
</Accordion.Grouping>;
```

### Content

Wraps padding around children nodes

```jsx
import { Accordion } from 'radiance-ui';

<Accordion.Grouping>
  <Accordion.Container>
    <Accordion title={<Accordion.Content>Title</Accordion.Content>}>
      <Accordion.Content>Expansion with content padding</Accordion.Content>
    </Accordion>
  </Accordion.Container>
</Accordion.Grouping>;
```

### Truncate

Prevents line-wrapping and shortens text with an ellipsis. Note: The ellipsis will only
be added if the text is a direct child.

```jsx
import { Accordion } from 'radiance-ui';

<Accordion.Grouping>
  <Accordion.Container>
    <Accordion
      title={
        <Accordion.Content>
          <Accordion.Truncate>
            This uses Accordion.Truncate to shorten long text.
          </Accordion.Truncate>
        </Accordion.Content>
      }
    >
      <Accordion.Content>
        Accordion.Truncate is a wrapper that will cut off any text (direct
        children only) with an added ellipsis and prevents line wrapping.
      </Accordion.Content>
    </Accordion>
  </Accordion.Container>
</Accordion.Grouping>;
```
