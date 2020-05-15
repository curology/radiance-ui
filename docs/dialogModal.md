# DialogModal

Dialog modals shouldn't contain large content and should not scroll unless screen size dictates it. To display large amounts of content, use `Immersive modal` instead.

Dialog modals require a user to make a choice between options and are not closable on click/tap outside. They may contain a close button if a close function is provided.

Dialog Modals should always contain at least 1 button and the logic should close the modal at some point.

## Usage

```jsx
// Imports
import React from 'react';
import { DialogModal, Button } from 'radiance-ui';

// Logic inside the component
const [openModal, setOpenModal] = useState(false);

{
  openModal && (
    <DialogModal title="Heads up!">
      <p>
        This will remove the cleanser and moisturizer from your free trial, too.
        Just the custom bottle will be sent your way!
      </p>
      <p>
        This will remove the cleanser and moisturizer from your free trial, too.
        Just the custom bottle will be sent your way!
      </p>
      <Button.Container>
        <Button isFullWidth onClick={(): void => setOpenModal(false)}>
          Yes, remove
        </Button>
        <Button
          isFullWidth
          onClick={(): void => setOpenModal(false)}
          buttonType="tertiary"
        >
          never mind
        </Button>
      </Button.Container>
    </DialogModal>
  );
}

// To open the dialog modal
<Button onClick={(): void => setOpenModal(true)}>Open Dialog Modal</Button>;
```

## Examples

<!-- STORY -->

## Proptypes

| prop             | propType | required | default | description                                                                                                     |
| ---------------- | -------- | -------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| children         | node     | yes      | -       | Dialog Modal body content. Must contain at least 1 button and is responsible to close the modal in the logic.   |
| onCloseIconClick | node     | no       | -       | If provided it will display a Close Icon at the top right. Must be a function that eventually closes the modal. |
| title            | string   | no       | -       | The title of the modal                                                                                          |
