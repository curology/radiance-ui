import React from 'react';
import PropTypes from 'prop-types';

import { ChipStyles, ChipText } from './style';

export type StatusType = 'default' | 'success' | 'error' | 'secondary';

type ChipProps = {
  status?: StatusType;
  text: string;
};

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
