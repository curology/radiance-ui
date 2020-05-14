# DialogModal

Dialog modals behave similarly on mobile as the `Immersive Modal`.

Dialog modals should not be used to display large amounts of content, use `Immersive modal` instead.

Dialog modals shouldn't contain large content and should not scroll unless screen size dictates it.

Dialog modals doesn't contain a Close button, they require a user to make a choice between options and are not closable on click/tap outside.

Dialog Modals should always contain at least 1 button but are flexible to either stack multiple buttons or put them in a row.

## Usage

```jsx
// Imports
import React from 'react';
import { DialogModal, Button } from 'radiance-ui';

// Logic inside the component
const [openModal, setOpenModal] = useState(false);

{
  openModal && (
    <DialogModal
      onClose={(): void => setOpenModal(false)}
      footerContent={
        <Button.Container>
          <Button isFullWidth>cta content</Button>
        </Button.Container>
      }
      title="Dialog modal title"
    >
      <p>Lorem ipsum dolor sit...</p>
    </DialogModal>
  );
}

// To open the dialog modal
<Button onClick={(): void => setOpenModal(true)}>Open Dialog Modal</Button>;
```

## Examples

<!-- STORY -->

## Proptypes

| prop          | propType | required | default | description                                                                |
| ------------- | -------- | -------- | ------- | -------------------------------------------------------------------------- |
| children      | node     | yes      | -       | Dialog Modal body content                                                  |
| footerButtons | node     | no       | -       | Recommended for buttons. This content is render at the bottom of the modal |
| onClose       | func     | yes      | -       | Function to close the modal                                                |
| title         | string   | no       | -       | The title of the modal                                                     |
