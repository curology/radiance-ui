import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';

import Style from './style';

type SVGComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  fill?: string;
  height?: string | number;
  /**
   * Displays svg `inline-block` instead of `block`
   */
  displayInline?: boolean;
  /**
   * Clockwise rotation, in degrees.
   */
  rotate?: number;
  width?: string | number;
  [key: string]: unknown;
}

/**
 * Helper component to pass the necessary props down to direct SVG imports, supported by @svgr (webpack and rollup).
 *
 * **This component should not be used directly**, and so is not included in the `shared-components` export.
 */
export const Icon = ({
  displayInline = false,
  height = 16,
  IconComponent,
  rotate = 0,
  width = 16,
  ...rest
}: IconProps & { IconComponent: SVGComponent }) => (
  <IconComponent
    css={Style.iconStyles({ displayInline, fill: rest.fill, rotate })}
    height={height}
    width={width}
    {...rest}
  />
);

Icon.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  displayInline: PropTypes.bool,
  fill: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rotate: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export const useIcon = (
  PrimaryIcon: SVGComponent,
  SecondaryIcon: SVGComponent,
  props: IconProps,
) => {
  const theme = useTheme();

  const ThemeIcon = theme.__type === 'primary' ? PrimaryIcon : SecondaryIcon;

  return <Icon IconComponent={ThemeIcon} {...props} />;
};
