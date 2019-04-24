import PropTypes from 'prop-types';
import React from 'react';
import ToggleButton from 'react-toggle-button';

import { COLORS } from '../../constants';
import { Container, Label, trackStyle, thumbStyle } from './style';

const propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

const defaultProps = {
  checked: false,
  label: '',
};

const Toggle = ({ checked, label, onChange }) => (
  <Container>
    {label && <Label onClick={onChange}>{label}</Label>}
    <ToggleButton
      value={checked || false}
      onToggle={onChange}
      inactiveLabel=""
      activeLabel=""
      thumbStyle={thumbStyle}
      trackStyle={trackStyle}
      thumbAnimateRange={[2, 17]}
      colors={{
        active: {
          base: COLORS.secondary,
          hover: COLORS.secondary,
        },
        inactive: {
          base: COLORS.purple10,
          hover: COLORS.purple10,
        },
      }}
    />
  </Container>
);

Toggle.propTypes = propTypes;
Toggle.defaultProps = defaultProps;

export default Toggle;
