import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withDocs } from 'storybook-readme';

import DropdownReadme from '../../docs/dropdown.md';
import DropdownExample from './dropdownExample';
import MobileExample, { MobileExampleDoc } from './mobileExample';

const stories = storiesOf('Dropdown', module);
stories.addDecorator(withKnobs);

stories.add(
  'Usage', 
  withDocs(DropdownReadme, () => <DropdownExample />)
);

stories.add(
  'Mobile example',
  withDocs(MobileExampleDoc, () => <MobileExample />)
);
