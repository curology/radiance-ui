import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import ImmersiveModalReadme from 'docs/immersiveModal';

import ImmersiveModalExamples from './immersiveModalExamples';

const stories = storiesOf('ImmersiveModal', module);

stories.add(
  'Usage',
  withDocs(ImmersiveModalReadme, () => (
    <React.Fragment>
      <ImmersiveModalExamples />
    </React.Fragment>
  )),
);