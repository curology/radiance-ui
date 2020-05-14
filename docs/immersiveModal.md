# ImmersiveModal

It is used to provide a layer on top of a page when we need to present more content and actions to patients.

It should not be used as a step to add friction / confirm an action, use `Dialog Modal` instead.

They are closable if clicked outside of container.

Immersive modals always include the close button.

Modals can contain a header image that is 240px tall (264px on desktop). Images should not contain rounded corners.

## Usage

```jsx
// Imports
import React from 'react';
import { ImmersiveModal, Button } from 'src/shared-components';
import headerImage from './headerImage.jpg';

// Logic inside the component
const [openModal, setOpenModal] = useState(false);

{
  openModal && (
    <ImmersiveModal
      onClose={(): void => setOpenModal(false)}
      headerImage={<img src={headerImage} alt="header" />}
      footerContent={
        <Button.Container>
          <Button isFullWidth>cta content</Button>
        </Button.Container>
      }
      title="Immersive modal title"
    >
      <p>Lorem ipsum dolor sit...</p>
    </ImmersiveModal>
  );
}

// To open the modal
<Button onClick={(): void => setOpenModal(true)}>Open Modal</Button>;
```

## Examples

<!-- STORY -->

## Proptypes

| prop          | propType | required | default | description                                                                |
| ------------- | -------- | -------- | ------- | -------------------------------------------------------------------------- |
| children      | node     | yes      | -       | Modal body content                                                         |
| footerContent | node     | no       | -       | Recommended for buttons. This content is render at the bottom of the modal |
| headerImage   | node     | no       | -       | Image that will render at the top of the modal                             |
| onClose       | func     | yes      | -       | Function to close the modal                                                |
| title         | string   | no       | -       | The title of the modal                                                     |
