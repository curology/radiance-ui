import PropTypes from 'prop-types';
import React from 'react';
import ToggleButton from 'react-toggle-button';
import { useTheme } from 'emotion-theming';

import { Container, Label, trackStyle, getThumbStyle } from './style';

const propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

const defaultProps = {
  checked: false,
  label: '',
};

const Toggle = ({ checked, label, onChange }) => {
  const theme = useTheme();

  return (
    <Container>
      {label && <Label onClick={onChange}>{label}</Label>}
      <ToggleButton
        value={checked || false}
        onToggle={onChange}
        inactiveLabel=""
        activeLabel=""
        thumbStyle={getThumbStyle(theme)}
        trackStyle={trackStyle}
        thumbAnimateRange={[1, 17]}
        colors={{
          active: {
            base: theme.COLORS.secondary,
          },
          inactive: {
            base: theme.COLORS.primaryTint3,
          },
          activeThumb: {
            base: theme.COLORS.white,
          },
          inactiveThumb: {
            base: theme.COLORS.white,
          },
        }}
      />
    </Container>
  );
};

Toggle.propTypes = propTypes;
Toggle.defaultProps = defaultProps;

export default Toggle;
