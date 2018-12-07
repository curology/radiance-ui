import React from 'react';
import PropTypes from 'prop-types';

import { ChipStyles, ChipText } from './style';

const Chip = ({ status, text }) => (
  <ChipStyles status={status}>
    <ChipText>{text}</ChipText>
  </ChipStyles>
);

Chip.propTypes = {
  status: PropTypes.oneOf(['pending', 'success', 'error', 'closed']).isRequired,
  text: PropTypes.string.isRequired,
};

export default Chip;
