import { Meta, storiesOf } from '@storybook/react';

import RoundButtonStory from './roundButton';
import ButtonStory from './button';
import LinkButtonStory from './linkButton';
import TextButtonStory from './textButton';

const stories = storiesOf('Buttons', module);

stories.add('Button', ButtonStory);
stories.add('RoundButton', RoundButtonStory);
stories.add('LinkButton', LinkButtonStory);
stories.add('TextButton', TextButtonStory);

// const ButtonStoryExport = {
//   title: 'Button',

// } as Meta;

// export default ButtonStoryExport;

const ButtonStoryExport = {
  title: 'Button',
  // component: Button,
} as Meta;

export default ButtonStoryExport;
