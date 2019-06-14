# Accordion
## Usage

```jsx
import { Accordion } from 'radiance-ui';

<Accordion.Container>
  <Accordion
    title={<div>Title</div>}
    isOpen={false}
    onClick={() => {}}
  >
    <div>Expansion</div>
  </Accordion>
  <Accordion
    title={
      <Accordion.Truncate>
        Title
      </Accordion.Truncate>
    }
    isOpen={false}
    onClick={() => {}}
  >
    <div>Expansion</div>
  </Accordion>
  <Accordion
    title={<div>Title</div>}
    isOpen={false}
    onClick={() => {}}
    noBorder
  >
    <div>Expansion</div>
  </Accordion>
  <Accordion
    title={<div>Title</div>}
    isOpen={false}
    onClick={() => {}}
    disabled
  >
    <div>Expansion</div>
  </Accordion>
  <Accordion
    title={<div>Title</div>}
    isOpen={false}
    onClick={() => {}}
    rightAlignArrow
  >
    <div>Expansion</div>
  </Accordion>
</Accordion.Container>

```

<!-- STORY -->

### Proptypes
| prop            | propType | required | default | description                                                                                                                  |
|-----------------|----------|----------|---------|------------------------------------------------------------------------------------------------------------------------------|
| title           | node     | yes      | -       | node that will render whether collapsed or expanded |
| isOpen          | boolean  | yes      | -       | determine if the accordion is collapsed (false) or expanded (true) |
| onClick         | function | yes      | -       | invoked when title node is clicked |
| children        | node(s)  | yes      | -       | node(s) that will render only when expanded |
| noBorder        | boolean  | no       | false   | when true, border lines between accordions and title/children nodes will disappear |
| disabled        | boolean  | no       | false   | when true, the accordion will be greyed out and the onClick prop will be disabled |
| rightAlignArrow | boolean  | no       | false   | when true, the arrow is aligned flush with the right side of the component |


### Subcomponents
The `<Accordion />` component has subcomponents available through dot notation. 

#### Thumbnails
Renders thumbnails of images passed to it: 

- 1 image: renders thumbnail of image

- 2 images: renders thumbnails of both images

- 3+ images: renders thumbnail of first image and a counter of additional images

```jsx
import { Accordion } from 'radiance-ui';

<Accordion.Thumbnails photoSrcs={[]} />
```

| prop      | propType             | required | default | description                                                                                                                  |
|-----------|----------------------|----------|---------|------------------------------------------------------------------------------------------------------------------------------|
| photoSrcs | array of src strings | yes      | -       | An array of image src strings that Accordion.Thumbails will use to render thumbnails |


#### Truncate
Prevents line-wrapping and shortens text with an ellipsis. Note: The ellipsis will only
be added if the text is a direct child.

```jsx
import { Accordion } from 'radiance-ui';

<Accordion.Truncate>
  Text to truncate
</Accordion.Truncate>
```

#### Container
Container to hold instances of `<Accordion>`

```jsx
import { Accordion } from 'radiance-ui';

<Accordion.Container> 
  <Accordion {...props} />
  <Accordion {...props} />
  <Accordion {...props} />
</Accordion.Container>
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
  <Accordion.Content>
    Expansion with content padding
  </Accordion.Content>
</Accordion>
```
