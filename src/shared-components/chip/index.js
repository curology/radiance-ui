import React from 'react';
import PropTypes from 'prop-types';

import { ChipStyles, ChipText } from './style';

const Chip = ({ status, text }) => (
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

export default Chip;
