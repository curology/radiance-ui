import React from 'react';
import { text, number, boolean } from '@storybook/addon-knobs';
import { useTheme } from 'emotion-theming';

import { CameraIcon } from '../../src/icons';

export const WithControls = () => {
  const theme = useTheme();

  return (
    <CameraIcon
      width={number('width', 16)}
      height={number('height', 16)}
      fill={text('Icon fill color', theme.COLORS.primary)}
      // @ts-ignore, TODO-TS: Rename inline to avoid passing to DOM, only used for styles
      inline={boolean('inline display option', false)}
      rotate={number('Rotation degrees', 0)}
      className={text('additional css class names', '')}
    />
  );
};

WithControls.parameters = {
  chromatic: { disable: true },
};
