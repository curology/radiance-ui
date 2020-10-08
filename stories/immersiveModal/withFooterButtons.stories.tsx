import React, { useState } from 'react';
import { ImmersiveModal, Button } from 'src/shared-components';

export const WithFooterButtonsComponent = () => {
  const [withButtons, setWithButtons] = useState(true);

  const onClick = () => setWithButtons(true);
  const onClose = () => setWithButtons(false);

  return (
    <React.Fragment>
      <Button onClick={onClick}>with footer buttons</Button>
      {withButtons && (
        <ImmersiveModal
          onClose={onClose}
          footerContent={
            <Button.Container>
              <Button isFullWidth onClick={onClose}>
                cta content
              </Button>
            </Button.Container>
          }
          title="Immersive modal title"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            explicabo magni, sequi similique nisi ab. Culpa, debitis? Quibusdam
            porro accusamus asperiores. Et ab nobis saepe optio hic eveniet
            consectetur error?
          </p>
        </ImmersiveModal>
      )}
    </React.Fragment>
  );
};
