import React from 'react';
import {
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs/blocks';
import type { Meta } from '@storybook/react';
import { text, number, boolean } from '@storybook/addon-knobs';
import * as iconComponents from 'src/icons/icons';
import * as emojiComponents from 'src/icons/emojis';
import * as glyphComponents from 'src/icons/glyphs';
import * as logoComponents from 'src/icons/logos';
import * as navIconComponents from 'src/icons/navIcons';
import { Typography } from 'src/shared-components';
import { BREAKPOINTS } from 'src/constants';
import { useTheme } from 'emotion-theming';

import { Icon as IconComponent } from '../../src/shared-components/icon';
import { CameraIcon } from '../../src/icons';
import Style from './style';

const WORDMARK_NAME = 'Wordmark';

export const WithControls = () => {
  const theme = useTheme();

  return (
    <CameraIcon
      width={number('width', 16)}
      height={number('height', 16)}
      fill={text('Icon fill color', theme.COLORS.primary)}
      displayInline={boolean('inline display option', false)}
      rotate={number('Rotation degrees', 0)}
      className={text('additional css class names', '')}
    />
  );
};

WithControls.parameters = {
  chromatic: { disable: true },
};

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

    <Typography.Heading>Icons</Typography.Heading>
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
      {Object.entries(glyphComponents).map(([name, Icon]) => {
        // Rough hack to determine if React function component returns null.
        const renderedIcon = Icon({});

        if (renderedIcon === null) return null;

        return (
          <Style.IconContainer key={name}>
            <Icon width={48} height={48} />
            <Style.IconLabel>{name}</Style.IconLabel>
          </Style.IconContainer>
        );
      })}
    </Style.Icons>

    <Typography.Heading>Nav Icons</Typography.Heading>
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

const addingSvgText = `
In order to add an SVG to Radiance, you first need to determine what type of icon you're adding:
\n - _Icon_: Any SVG that signifies interactivity (most often clicking). 
Good examples include "logout", "plus sign", etc.
\n - _Emoji_: Any SVG that has a facial expression. 
Check out existing emojis to get an idea of what those look like.
\n - _Glyph_: Any SVG that communicates an idea or message, but the user might not neccessarily interact with it. 
Examples include "sun", "selfie", "pills".
\n - _Logo_: Logos and Wordmarks
\n - _Nav Icons_: Any SVG used in conjunction with UI for navigation
\n\nIf you don't know which category it belongs to, get a second opinion.
\n\nAdd the SVG file into \`src/svgs/ICON_TYPE/\` with a corresponding export component in \`src/icons/ICON_TYPE/\`, then run \`yarn run build:icons:all\`. Seeing existing files for more context.
\n\nA few things to note:
\n\n- No need to optimize the SVG since SVGR will optimize the SVG for us.
\n- SVGR will convert all SVGs to a React Component during build time, so consumers of the library will not need to run SVGR on their projects.
\n- If you want to use SVGs in a storybook story, you'll want to import directly from the \`src/icons\` folder, which includes theming context.
\n\nAfter adding the SVG file, run \`yarn run storybook\` and confirm the icon looks correct, and then open a PR with the changes.
`;

export default {
  title: 'Icons/Icon',
  component: IconComponent,
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={
              "import { CameraIcon } from 'radiance-ui/lib/icons'\n\n<CameraIcon width={16} height={16} />"
            }
          />
          <Heading>Props:</Heading>
          <ArgsTable of={IconComponent} />
          <Stories includePrimary />
          <Heading>Notes</Heading>
          <Description>
            See **Icon Library** for all available icon components and previews.
          </Description>
          <Heading>Adding a new SVG</Heading>
          <Description>{addingSvgText}</Description>
        </React.Fragment>
      ),
    },
  },
} as Meta;
