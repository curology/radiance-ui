import React from 'react';
import PropTypes from 'prop-types';

import { ChipStyles, ChipText } from './style';

export type StatusType = 'default' | 'success' | 'error' | 'secondary';

type ChipProps = {
  status?: StatusType;
  text: string;
};

/**
 * Chips should be used in small spaces to add value to the elements they're nested in. (i.e. "Recommended" on product cards or showing an error on an element in a list.)
 *
 * These chips can be either Default, Success, or Error. The Secondary is an inverse of the primary chip and should be used on top of photos or illustrations.
 */
export const Chip = ({ status = 'default', text }: ChipProps) => (
  <ChipStyles status={status}>
    <ChipText>{text}</ChipText>
  </ChipStyles>
);

Chip.propTypes = {
  status: PropTypes.oneOf(['default', 'success', 'error', 'secondary']),
  text: PropTypes.string.isRequired,
};

Chip.defaultProps = {
  status: 'default',
};
