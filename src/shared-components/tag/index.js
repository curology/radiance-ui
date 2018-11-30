import React from 'react';
import PropTypes from 'prop-types';

import { TagStyles, TagText } from './style';

const Tags = ({ status, text }) => (
  <TagStyles status={status}>
    <TagText>{text}</TagText>
  </TagStyles>
);

Tags.propTypes = {
  status: PropTypes.oneOf(['pending', 'success', 'error', 'closed']).isRequired,
  text: PropTypes.string.isRequired,
};

export default Tags;
