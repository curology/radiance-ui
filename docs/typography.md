# Typography
### Usage

```jsx
import { Typography } from 'radiance-ui';

<Typography.Display>Display</Typography.Display>
<Typography.Heading>Heading</Typography.Heading>
<Typography.Title>Title</Typography.Title>
<p>Body</p>
<Typography.Caption>Caption</Typography.Caption>
<Typography.Label>Label</Typography.Label>
<Typography.ErrorText>ErrorText</Typography.ErrorText>
<Typography.SuccessText>SuccessText</Typography.SuccessText>
<Typography.LinkTag>LinkTag</Typography.LinkTag>
<Typography.ButtonText>ButtonText</Typography.ButtonText>
```

<!-- STORY -->

### Proptypes
- `children` - the text to be displayed

### Notes
These are the base typography styles and can be overridden only if the
designs specify that we do. In order to override the style, use the
`css` prop or use the `TYPOGRAPHY_STYLE` export that is discussed in a
[separate doc](https://github.com/pocketderm/radiance-ui/tree/master/docs/typograpy_style.md).

Using a `css` prop:
```jsx
<Typography.Display css={ color: COLORS.failure }>
  Override!
</Typography.Display>
```
