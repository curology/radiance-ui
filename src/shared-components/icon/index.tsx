import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';

import Style from './style';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  fill?: string;
  height?: string | number;
  displayInline?: boolean;
  /**
   * Clockwise rotation, in degrees
   */
  rotate?: number;
  width?: string | number;
  [key: string]: unknown;
}

/**
 * Helper component to pass the necessary props down to direct SVG imports, supported by SVGR.
 *
 * It's not strictly necessary but this helps with documenting usage.
 */
export const Icon = ({
  children,
  className,
  displayInline = false,
  fill,
  height = 16,
  rotate = 0,
  width = 16,
  ...rest
}: IconProps & { children: JSX.Element }) =>
  React.cloneElement(children, {
    className,
    css: Style.iconStyles({ displayInline, fill, rotate }),
    height,
    width,
    ...rest,
  });

Icon.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  displayInline: PropTypes.bool,
  fill: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Clockwise rotation, in degrees
   */
  rotate: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

type SVGComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export const useIcon = (
  PrimaryIcon: SVGComponent,
  SecondaryIcon: SVGComponent,
  props: IconProps,
) => {
  const theme = useTheme();

  const ThemeIcon = theme.__type === 'primary' ? PrimaryIcon : SecondaryIcon;

  return (
    <Icon {...props}>
      <ThemeIcon />
    </Icon>
  );
};
