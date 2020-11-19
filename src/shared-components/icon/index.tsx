import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';

import Style from './style';

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
  children,
  className,
  displayInline = false,
  fill,
  height = 16,
  rotate = 0,
  width = 16,
  ...rest
}: IconProps & { children: JSX.Element }) => {
  // Many of our SVG have fill="none". When passing fill down as a prop to cloneElement, an
  // undefined fill value will overwrite the "none" value. This mechanism prevents unintended regression.
  const safeFill = fill ? { fill } : {};

  return React.cloneElement(children, {
    className,
    css: Style.iconStyles({ displayInline, fill, rotate }),
    height,
    width,
    ...safeFill,
    ...rest,
  });
};

Icon.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  displayInline: PropTypes.bool,
  fill: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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

  /**
   * React.cloneElement not fully compatible with css prop, so we apply it here (with undefined) to have it available in React.cloneElement
   * @see: https://github.com/emotion-js/emotion/pull/1985/files#diff-6e9f0af93add92299d604a909f5b4a3c366a28c819127d9b7f33f3694cdfcffcR251
   */
  return (
    <Icon {...props}>
      <ThemeIcon css={undefined} />
    </Icon>
  );
};
