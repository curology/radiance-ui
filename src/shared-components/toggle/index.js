import PropTypes from 'prop-types';
import React from 'react';
import ToggleButton from 'react-toggle-button';
import { ThemeProvider } from 'emotion-theming';
import { primaryTheme, secondaryTheme } from 'src/constants/themes';

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

const Toggle = ({ checked, label, onChange }) => {
  const [theme, setTheme] = React.useState(primaryTheme);

  const toggleTheme = () =>
    theme.__type === 'primary'
      ? setTheme(secondaryTheme)
      : setTheme(primaryTheme);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <button onClick={toggleTheme} type="button">
          swap theme
        </button>
      </div>
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
    </ThemeProvider>
  );
};

Toggle.propTypes = propTypes;
Toggle.defaultProps = defaultProps;

export default Toggle;
