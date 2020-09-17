import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import DropdownReadme from '../../docs/dropdown/main';
import DropdownExample from './dropdownExample';
import MobileReadme from '../../docs/dropdown/mobile';
import MobileExample from './mobileExample';

const stories = storiesOf('Dropdown', module);

stories.add(
  'Usage',
  withDocs(DropdownReadme, () => <DropdownExample />),
);

stories.add(
  'Mobile example',
  withDocs(MobileReadme, () => <MobileExample />),
);

const DropdownStory = {
  title: 'Dropdown',
};

export default DropdownStory;
