import React from 'react';
import { Meta, storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import DialogModalReadme from 'docs/dialogModal';

import DialogModalExamples from './dialogModalExamples';

const stories = storiesOf('DialogModal', module);

stories.add(
  'Usage',
  withDocs(DialogModalReadme, () => (
    <React.Fragment>
      <DialogModalExamples />
    </React.Fragment>
  )),
);

const DialogModalStory = {
  title: 'DialogModal',
} as Meta;

export default DialogModalStory;
