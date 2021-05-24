import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';

import Style from './style';

type SVGComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  /**
   * Displays svg `inline-block` instead of `block`
   */
  displayInline?: boolean;
  fill?: string;
  height?: string | number;
  /**
   * Clockwise rotation, in degrees.
   */
  rotate?: number;
  width?: string | number;
  [key: string]: unknown;
}

export type RadianceIconComponent = (
  props: IconProps,
) => ReturnType<typeof useIcon>;

/**
 * Helper component to pass the necessary props down to direct SVG imports, supported by @svgr (cli and rollup).
 *
 * **This component should not be used directly**, and so is not included in the `shared-components` export.
 */
export const Icon: React.FC<IconProps & { IconComponent: SVGComponent }> = ({
  displayInline = false,
  IconComponent,
  rotate = 0,
  ...rest
}) => (
  <IconComponent
    css={Style.iconStyles({ displayInline, fill: rest.fill, rotate })}
    {...rest}
  />
);

Icon.propTypes = {
  className: PropTypes.string,
  displayInline: PropTypes.bool,
  fill: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  // @ts-expect-error -- TypeScript type is too specific for PropTypes types
  IconComponent: PropTypes.element.isRequired,
  rotate: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export const useIcon = (
  PrimaryIcon: SVGComponent | null,
  SecondaryIcon: SVGComponent | null,
  props: IconProps,
) => {
  const theme = useTheme();

  const ThemeIcon = theme.__type === 'primary' ? PrimaryIcon : SecondaryIcon;

  if (ThemeIcon === null) return null;

  return <Icon IconComponent={ThemeIcon} {...props} />;
};
