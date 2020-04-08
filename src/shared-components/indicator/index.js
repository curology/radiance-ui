import React from 'react';
import PropTypes from 'prop-types';

import { IndicatorContainer } from './style';

const Indicator = ({ text }) => (
  <IndicatorContainer>
    <div>{text}</div>
  </IndicatorContainer>
);

Indicator.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Indicator;
