import React from 'react';
import { useTheme } from 'emotion-theming';

type SVGComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export const useIcon = (
  PrimaryIcon: SVGComponent,
  SecondaryIcon: SVGComponent,
) => {
  const theme = useTheme();

  return theme.__type === 'primary' ? PrimaryIcon : SecondaryIcon;
};
