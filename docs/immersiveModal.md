# ImmersiveModal

- The immersive modal is used to provide a layer on top of a page when we need to present more content and actions to patients.
- Immersive modals should not be used as a step to add friction / confirm an action, use `Dialog Modal` instead.
- Immersive modals are closable if clicked outside of container.
- Immersive modals always include an `X` button to close.
- Images in modals:
  - Modals can contain a header image that is 240px tall (264px on desktop).
  - Header text is `32px` below the image and should behave similarly on scroll.
  - Images inside of modals should not contain rounded corners and should fit the content padding.

## Usage

```jsx
import React from 'react';

import { ImmersiveModal, Button } from 'radiance-ui';

const HeaderImage = () => (
  <div>This is a placeholder for an optional header image.</div>
);

class DefaultImmersiveModal extends React.Component {
  state = {
    defaultIsOpen: false,
    headerIsOpen: false,
  };

  onOpenDefaultModal = () => this.setState({ defaultIsOpen: true });

  onOpenHeaderModal = () => this.setState({ headerIsOpen: true });

  onClose = () =>
    this.setState({
      defaultIsOpen: false,
      headerIsOpen: false,
    });

  render() {
    const { defaultIsOpen, headerIsOpen } = this.state;

    return (
      <div>
        <Button onClick={this.onOpenDefaultModal}>Open ImmersiveModal</Button>
        {defaultIsOpen && (
          <ImmersiveModal onClose={this.onClose}>
            <ImmersiveModal.Title>
              This is styled with ImmersiveModal.Title
            </ImmersiveModal.Title>
            <ImmersiveModal.Body>
              This is styled with ImmersiveModal.Body
            </ImmersiveModal.Body>
            <ImmersiveModal.Footer>
              This is styled with ImmersiveModal.Footer. It gives us a padding
              to separate from the body.
              <Button.Container>
                <Button onClick={this.onClose}>Close ImmersiveModal</Button>
              </Button.Container>
            </ImmersiveModal.Footer>
          </ImmersiveModal>
        )}

        <Button onClick={this.onOpenHeaderModal}>
          Open ImmersiveModal with Header
        </Button>
        {headerIsOpen && (
          <ImmersiveModal onClose={this.onClose} header={<HeaderImage />}>
            <ImmersiveModal.Title>
              This is styled with ImmersiveModal.Title
            </ImmersiveModal.Title>
            <ImmersiveModal.Body>
              This is styled with ImmersiveModal.Body.
            </ImmersiveModal.Body>
            <ImmersiveModal.Footer>
              This is styled with ImmersiveModal.Footer. It gives us a padding
              to separate from the body.
              <Button.Container>
                <Button onClick={this.onClose}>Close ImmersiveModal</Button>
              </Button.Container>
            </ImmersiveModal.Footer>
          </ImmersiveModal>
        )}
      </div>
    );
  }
}
```

<!-- STORY -->

### Proptypes

| prop        | propType | required | default  | description                                                                                                          |
| ----------- | -------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------------- |
| onClose     | func     | no       | () => {} | Function that is executed when either the close icon is clicked or any part of the page outside the modal is clicked |
| canBeClosed | bool     | no       | true     | If false, the close icon does not render and the onClose function does not execute                                   |
| children    | node     | yes      | -        | Node that will render when the modal is visible                                                                      |
| header      | node     | no       | -        | Node that will render at the top of the modal and without padding, most commonly used for images                     |

### Notes

Available subcomponents through dot notation:

`<ImmersiveModal.Title>`
`<ImmersiveModal.Body>`
`<ImmersiveModal.Footer>`
