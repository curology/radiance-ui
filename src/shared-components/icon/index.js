import React from 'react';
import PropTypes from 'prop-types';

import iconFilePath from '../../svgs/icons.svg';
import { COLORS } from '../../constants';

const propTypes = {
  iconName: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rotate: PropTypes.number,
  fill: PropTypes.string,
  inline: PropTypes.bool,
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
  fill: COLORS.primary,
  height: 15,
  inline: false,
  rotate: 0,
  width: 15,
};

const Icon = ({
  className,
  fill,
  height,
  iconName,
  inline,
  rotate,
  width,
  ...rest
}) => {
  // eslint-disable-next-line no-undef
  const icon = window.__SVG_INLINE__
    ? `#${iconName}`
    : `${iconFilePath}#${iconName}`;
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      css={`
        display: ${inline ? 'inline-block' : 'block'};
        transform: rotate(${rotate}deg);
        color: ${fill};
        transition: color 350ms;
        ${className};
      `}
      {...rest}
    >
      <use xlinkHref={icon} />
    </svg>
  );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
