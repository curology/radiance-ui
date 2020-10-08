import React from 'react';
import * as iconComponents from 'src/svgs/icons';
import * as emojiComponents from 'src/svgs/emojis';
import * as glyphComponents from 'src/svgs/glyphs';
import * as logoComponents from 'src/svgs/logos';
import * as navIconComponents from 'src/svgs/navIcons';
import { Typography } from 'src/shared-components';

import { Icons, IconContainer, IconLabel } from './style';

const WORDMARK_NAME = 'Wordmark';

export const IconLibrary = () => (
  <React.Fragment>
    <Typography.Heading>Logos</Typography.Heading>
    <Icons>
      {Object.entries(logoComponents).map(([name, Icon]) => (
        <IconContainer key={name}>
          <Icon width={name === WORDMARK_NAME ? 175 : 40} height={40} />
          <IconLabel>{name}</IconLabel>
        </IconContainer>
      ))}
    </Icons>

    <Typography.Heading>Icons</Typography.Heading>
    <Icons>
      {Object.entries(iconComponents).map(([name, Icon]) => (
        <IconContainer key={name}>
          <Icon width={20} height={20} />
          <IconLabel>{name}</IconLabel>
        </IconContainer>
      ))}
    </Icons>

    <Typography.Heading>Emojis</Typography.Heading>
    <Icons>
      {Object.entries(emojiComponents).map(([name, Icon]) => (
        <IconContainer key={name}>
          <Icon width={48} height={48} />
          <IconLabel>{name}</IconLabel>
        </IconContainer>
      ))}
    </Icons>

    <Typography.Heading>Glyphs</Typography.Heading>
    <Icons>
      {Object.entries(glyphComponents).map(([name, Icon]) => (
        <IconContainer key={name}>
          <Icon width={48} height={48} />
          <IconLabel>{name}</IconLabel>
        </IconContainer>
      ))}
    </Icons>

    <Typography.Heading>Nav Icons</Typography.Heading>
    <Icons>
      {Object.entries(navIconComponents).map(([name, Icon]) => (
        <IconContainer key={name}>
          <Icon width={25} height={25} />
          <IconLabel>{name}</IconLabel>
        </IconContainer>
      ))}
    </Icons>
  </React.Fragment>
);
