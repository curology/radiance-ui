import PropTypes from 'prop-types';
import React from 'react';
import ToggleButton from 'react-toggle-button';
import { ThemeProvider } from 'emotion-theming';

import { COLORS } from '../../constants';
import {
  Container, Label, trackStyle, thumbStyle, 
} from './style';

const propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

const defaultProps = {
  checked: false,
  label: '',
};

// placeholders for actual theme logic
const darkTheme = {
  COLORS: {
    primaryTint1: '#000000',
    primaryTint5: '#cccccc',
    secondary: '#414a4c',
    activeThumb: COLORS.white,
    inactiveThumb: COLORS.white,
  },
};

// mock
const useTheme = theme => (theme === 'someTheme' ? {} : darkTheme);

const Toggle = ({ checked, label, onChange }) => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        {label && <Label onClick={onChange}>{label}</Label>}
        <ToggleButton
          value={checked || false}
          onToggle={onChange}
          inactiveLabel=""
          activeLabel=""
          thumbStyle={thumbStyle}
          trackStyle={trackStyle}
          thumbAnimateRange={[1, 17]}
          colors={{
            active: {
              base: theme.COLORS.secondary,
            },
            inactive: {
              base: theme.COLORS.primaryTint5,
            },
            activeThumb: {
              base: theme.COLORS.activeThumb,
            },
            inactiveThumb: {
              base: theme.COLORS.inactiveThumb,
            },
          }}
        />
      </Container>
    </ThemeProvider>
  );
};

Toggle.propTypes = propTypes;
Toggle.defaultProps = defaultProps;

export default Toggle;
