import React from 'react';

import { ChevronIcon } from '../../src/icons';
import { Icon } from '../../src/shared-components/icon';

// export * from './iconLibrary.stories';
// export * from './mockIcon.stories';
// export * from './withControls.stories';

export const Usage = () => (
  <Icon>
    <ChevronIcon />
  </Icon>
);

export default {
  title: 'Icons/Icon',
  component: Icon,
};
