import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { css } from '@emotion/core';

import ModalReadme from 'docs/modal.md';
import { Modal, Typography, Container } from 'src/shared-components';
import { COLORS } from 'src/constants';

import DefaultModal from './defaultModal';

const ModalChild = () => (
  <Modal.ContentContainer css={css`background-color: ${COLORS.purple15};`}>
    <Modal.Title>Modal is Open!</Modal.Title>
  </Modal.ContentContainer>
);

const stories = storiesOf('Modal', module);

stories.addDecorator(withKnobs);

stories.add(
  'Usage',
  withDocs(ModalReadme, () => (
    <React.Fragment>
      <DefaultModal />

      <Typography.Heading>With Knobs</Typography.Heading>
      <Container>
        You can open and interact with the modal by using the knobs on the side!
        <Modal
          isOpen={boolean('isOpen', false)}
          canBeClosed={boolean('canBeClosed', true)}
          onClose={action('onClose invoked!')}
        >
          <ModalChild />
        </Modal>
      </Container>
    </React.Fragment>
  ))
);
