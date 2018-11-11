import React from 'react';

import * as iconComponents from 'src/svgs';

import {
  Icons,
  IconContainer,
  IconLabel,
} from './style';

const IconList = () => (
  <Icons>
    {Object.entries(iconComponents).map(([name, Icon]) => (
      <IconContainer key={name}>
        <Icon width={25} height={25} />
        <IconLabel>{name}</IconLabel>
      </IconContainer>
    ))}
  </Icons>
);

export default IconList;
