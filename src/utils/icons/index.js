// If you change the  name of this file, update iconTemplate.js
import PropTypes from 'prop-types';
import { css } from 'react-emotion';

import { COLORS } from '../../constants';

export const propTypes = {
  inline: PropTypes.bool,
  rotate: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export const defaultProps = {
  className: '',
  fill: COLORS.primary,
  inline: undefined,
  rotate: 0,
  width: 16,
  height: 16,
};

export const iconStyles = props => css`
  display: ${props.inline ? "inline-block" : "block"};
  transform: rotate(${props.rotate}deg);
  color: ${props.fill};
  transition: color 350ms;
`;
