# Modal
## Usage

```jsx
import React from 'react';

import { Modal, Button } from 'radiance-ui';

class DefaultModal extends React.Component {
  state = {
    isOpen: false,
  };

  onOpenModal = () => this.setState({ isOpen: true });

  onClose = () => this.setState({ isOpen: false });

  render() {
    const { isOpen } = this.state;

    return (
      <div>
        <Button onClick={this.onOpenModal}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={this.onClose}>
          <Modal.ContentContainer>
            <Modal.Title>This is styled with Modal.Title</Modal.Title>
            <Modal.Body>This is styled with Modal.Body.</Modal.Body>
            <Modal.Footer>
              This is styled with Modal.Footer. It gives us a padding to separate
              from the body.
              <Button.Container>
                <Button onClick={this.onClose}>Close Modal</Button>
              </Button.Container>
            </Modal.Footer>
          </Modal.ContentContainer>
        </Modal>
        <br />
      </div>
    );
  }
}
```

<!-- STORY -->

### Proptypes
| prop     | propType           | required | default | description                                                                                                                  |
|----------|--------------------|----------|---------|------------------------------------------------------------------------------------------------------------------------------|
| onClose | func | no | () => {} | Function that is executed when the close icon is clicked |
| isOpen | bool | no | false | Determines if the modal is open (visible) |
| canBeClosed | bool | no | true | If false, the close icon does not render |
| className | string | no | '' | Class name that will be passed to the modal |
| children | node | no | '' | Node that will render when the modal is open |

### Notes

Available subcomponents through dot notation:

`<Modal.ContentContainer>`
`<Modal.Title>`
`<Modal.Body>`
`<Modal.Footer>`