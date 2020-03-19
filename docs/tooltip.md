# Tooltip

Tooltips provide additional context to elements or give patients hints about new features or updates.

They can be triggered from an icon or another component (such as a navigation link)

## Usage

```jsx
import { Tooltip } from 'radiance-ui';

<Tooltip content="Tooltip Content goes here">
  Hover or Click here to trigger the Tooltip with default values
</Tooltip>

<Tooltip
  hasRestrictedWidth
  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur enim diam, eget fringilla neque efficitur eu. Praesent et ornare risus. Aenean in orci posuere, convallis nulla a, posuere dolor."
>
  Hover or Click here to trigger the Tooltip. This tooltip have a
  restricted width.
</Tooltip>

<Tooltip
  arrowAlign="left"
  content={
    <span>
      <strong>Did you know?</strong>
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
      dolore! Esse at, aliquid.
    </span>
  }
>
  Hover here to trigger the tooltip.
</Tooltip>

<Tooltip content={<strong>3 new</strong>} isSmall arrowAlign="middle">
  Hover here to trigger the small tooltip.
</Tooltip>
```

<!-- STORY -->

### Proptypes

| prop               | propType | required | default  | description                                                                            |
| ------------------ | -------- | -------- | -------- | -------------------------------------------------------------------------------------- |
| alignRightPercent  | number   | no       | -        | adjust position using %                                                                |
| alignTopPercent    | number   | no       | -        | adjust position using %                                                                |
| arrowAlign         | string   | no       | 'middle' | must be one of: 'left', 'middle', 'right'                                              |
| children           | node     | yes      | -        | content of the trigger element displayed on page                                       |
| content            | node     | yes      | ''       | content of the tooltip                                                                 |
| defaultOpen        | bool     | no       | false    | show the tooltip without the need of the trigger                                       |
| display            | bool     | no       | true     | programatically control the tooltip to never show (false) or function as normal (true) |
| hasRestrictedWidth | bool     | no       | false    | makes the tooltip have a maximun width of 327px                                        |
| isSmall            | bool     | no       | false    | small tooltip with very little padding                                                 |
| nudgeLeft          | number   | no       | 0        | adjust position using px                                                               |
| nudgeRight         | number   | no       | 0        | adjust position using px                                                               |
| nudgeTop           | number   | no       | 0        | adjust position using px                                                               |
| nudgeBottom        | number   | no       | 0        | adjust position using px                                                               |
| position           | string   | no       | 'top'    | must be one of: 'top', 'bottom'                                                        |
