import React from 'react';
import * as iconComponents from 'src/svgs/icons';
import * as emojiComponents from 'src/svgs/emojis';
import * as glyphComponents from 'src/svgs/glyphs';
import * as logoComponents from 'src/svgs/logos';
import * as navIconComponents from 'src/svgs/navIcons';
import { Typography } from 'src/shared-components';
import { BREAKPOINTS } from 'src/constants';

import Style from './style';

const WORDMARK_NAME = 'Wordmark';

export const IconLibrary = () => (
  <React.Fragment>
    <Typography.Heading>Logos</Typography.Heading>
    <Style.Icons>
      {Object.entries(logoComponents).map(([name, Icon]) => (
        <Style.IconContainer key={name}>
          <Icon width={name === WORDMARK_NAME ? 175 : 40} height={40} />
          <Style.IconLabel>{name}</Style.IconLabel>
        </Style.IconContainer>
      ))}
    </Style.Icons>

    <Typography.Heading>Style.Icons</Typography.Heading>
    <Style.Icons>
      {Object.entries(iconComponents).map(([name, Icon]) => (
        <Style.IconContainer key={name}>
          <Icon width={20} height={20} />
          <Style.IconLabel>{name}</Style.IconLabel>
        </Style.IconContainer>
      ))}
    </Style.Icons>

    <Typography.Heading>Emojis</Typography.Heading>
    <Style.Icons>
      {Object.entries(emojiComponents).map(([name, Icon]) => (
        <Style.IconContainer key={name}>
          <Icon width={48} height={48} />
          <Style.IconLabel>{name}</Style.IconLabel>
        </Style.IconContainer>
      ))}
    </Style.Icons>

    <Typography.Heading>Glyphs</Typography.Heading>
    <Style.Icons>
      {Object.entries(glyphComponents).map(([name, Icon]) => (
        <Style.IconContainer key={name}>
          <Icon width={48} height={48} />
          <Style.IconLabel>{name}</Style.IconLabel>
        </Style.IconContainer>
      ))}
    </Style.Icons>

    <Typography.Heading>Nav Style.Icons</Typography.Heading>
    <Style.Icons>
      {Object.entries(navIconComponents).map(([name, Icon]) => (
        <Style.IconContainer key={name}>
          <Icon width={25} height={25} />
          <Style.IconLabel>{name}</Style.IconLabel>
        </Style.IconContainer>
      ))}
    </Style.Icons>
  </React.Fragment>
);

IconLibrary.parameters = {
  chromatic: { viewports: [BREAKPOINTS.xs] },
};
