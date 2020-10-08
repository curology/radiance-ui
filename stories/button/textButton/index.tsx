import React from 'react';
import { withDocs } from 'storybook-readme';
import { action } from '@storybook/addon-actions';
import TextButtonReadme from 'docs/button/textButton';
import { TextButton } from 'src/shared-components';

import Container from '../container';

const TextButtonStory = withDocs(TextButtonReadme, () => (
  <React.Fragment>
    <Container>
      <TextButton onClick={action('Button was clicked')}>
        All of this text is clickable
      </TextButton>
      <br />
      <TextButton disabled>This text button is disabled</TextButton>
    </Container>
  </React.Fragment>
));

export default TextButtonStory;