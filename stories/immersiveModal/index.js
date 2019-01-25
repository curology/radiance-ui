import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import ImmersiveModalReadme from 'docs/immersiveModal.md';
import { ImmersiveModal, Typography, Container } from 'src/shared-components';

import DefaultImmersiveModal from './defaultImmersiveModal';

const ModalChild = () => (
  <ImmersiveModal.Title>Modal is Open!</ImmersiveModal.Title>
);

// eslint-disable-next-line react/prop-types
const ModalKnobsContainer = ({ isOpen }) => (
  <React.Fragment>
    {isOpen && (
      <ImmersiveModal
        canBeClosed={boolean('canBeClosed', true)}
        onClose={action('onClose invoked!')}
      >
        <ModalChild />
      </ImmersiveModal>
    )}
  </React.Fragment>
);

const stories = storiesOf('ImmersiveModal', module);

stories.addDecorator(withKnobs);

stories.add(
  'Usage',
  withDocs(ImmersiveModalReadme, () => (
    <React.Fragment>
      <DefaultImmersiveModal />

      <Typography.Heading>With Knobs</Typography.Heading>
      <Container>
        You can open and interact with the modal by using the knobs on the side!
        <ModalKnobsContainer
          isOpen={boolean('open ImmersiveModal', false)}
        />
      </Container>
    </React.Fragment>
  ))
);
