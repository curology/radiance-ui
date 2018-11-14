import React from 'react';

import * as iconComponents from 'src/svgs/icons';
import * as emojiComponents from 'src/svgs/emojis';
import * as glyphComponents from 'src/svgs/glyphs';
import { Typography } from 'src/shared-components';

import {
  Icons,
  IconContainer,
  IconLabel,
} from './style';

const IconList = () => (
  <React.Fragment>
    <Typography.Heading>Icons</Typography.Heading>
    <Icons>
      {Object.entries(iconComponents).map(([name, Icon]) => (
        <IconContainer key={name}>
          <Icon width={25} height={25} />
          <IconLabel>{name}</IconLabel>
        </IconContainer>
      ))}
    </Icons>

    <Typography.Heading>Emojis</Typography.Heading>
    <Icons>
      {Object.entries(emojiComponents).map(([name, Icon]) => (
        <IconContainer key={name}>
          <Icon width={25} height={25} />
          <IconLabel>{name}</IconLabel>
        </IconContainer>
      ))}
    </Icons>

    <Typography.Heading>Glyphs</Typography.Heading>
    <Icons>
      {Object.entries(glyphComponents).map(([name, Icon]) => (
        <IconContainer key={name}>
          <Icon width={25} height={25} />
          <IconLabel>{name}</IconLabel>
        </IconContainer>
      ))}
    </Icons>
  </React.Fragment>
);

export default IconList;
