# ImmersiveModal

The immersive modal is used to provide a layer on top of a page when we need to present more content and actions to patients.

Immersive modals should not be used as a step to add friction / confirm an action, use `Modal` instead.

Immersive modals are closable if clicked outside of container.

Immersive modals always include the close button.

### Images in modals:

- Modals can contain a header image that is 240px tall (264px on desktop).
- Header text is `32px` below the image and should behave similarly on scroll.
- Images inside of modals should not contain rounded corners and should fit the content padding.

## Usage

```jsx
import React from 'react';
```

<!-- STORY -->

### Proptypes

| prop        | propType | required | default         | description                                     |
| ----------- | -------- | -------- | --------------- | ----------------------------------------------- |
| onClose     | func     | no       | () => undefined | Function called when modal is closing           |
| children    | node     | yes      | -               | Node that will render when the modal is visible |
| headerImage | node     | no       | -               | Image that will render as header of the modal   |

### Notes

Modal Subcomponents:

`<ImmersiveModal.Title>`
`<ImmersiveModal.Body>`
`<ImmersiveModal.Footer>`
