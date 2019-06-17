# TextButton

## Usage

```jsx
import { TextButton } from 'radiance-ui';

<TextButton onClick={this.handleClick}>
  This text is clickable
</TextButton>

<TextButton disabled>
  This is disabled
</TextButton>
```

<!-- STORY -->

### Proptypes


| prop     | propType | required | default  | description                                             |
| -------- | -------- | -------- | -------- | ------------------------------------------------------- |
| onClick  | func     | no       | () => {} | The callback funciton to call when component is clicked |
| disabled | bool     | no       | false    | When true, `onClick` will not be called                 |
| children | node     | yes      | -        | Node/text to be rendered inside the button              |


### Notes
`TextButton` will render a block of text (or node) that will function as a button. The component renders with padding and should not be used inline within body text, etc. Useful for rendering a chunk of text that can be clicked but can also be disabled if needed.