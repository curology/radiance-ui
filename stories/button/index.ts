import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import RoundButtonStory from './roundButton';
import ButtonStory from './button';
import LinkButtonStory from './linkButton';
import TextButtonStory from './textButton';

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

stories.add('Button', ButtonStory);
stories.add('RoundButton', RoundButtonStory);
stories.add('LinkButton', LinkButtonStory);
stories.add('TextButton', TextButtonStory);
