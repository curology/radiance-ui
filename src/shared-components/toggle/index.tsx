import { useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';
// @ts-expect-error: No @types, we should replace this dependency
import ToggleButton from 'react-toggle-button';

import {
  Container,
  Label,
  ReactToggleButtonContainer,
  trackStyle,
  thumbStyle,
} from './style';

export interface ToggleProps {
  checked?: boolean;
  label?: string;
  onChange: () => void;
}

/**
 * react-toggle-button in-lines all of its styling.
 * toggleInputStyles overrides the defaults.
 */
const toggleInputStyles = {
  margin: '0',
  height: '24px',
  width: '40px',
  position: 'absolute',
};

/**
 * The `<Toggle>` component is usually wrapped in a `container` element (with a fixed `width` style for example). The toggle and label are spread in the container (`space-between`) from edge to edge.
 */
export const Toggle = ({
  checked = false,
  label = '',
  onChange,
}: ToggleProps) => {
  const theme = useTheme();

  return (
    <Container>
      {label && <Label onClick={onChange}>{label}</Label>}
      <ReactToggleButtonContainer>
        <ToggleButton
          value={checked || false}
          onToggle={onChange}
          inactiveLabel=""
          activeLabel=""
          thumbStyle={thumbStyle(theme)}
          trackStyle={trackStyle}
          thumbAnimateRange={[1, 17]}
          colors={{
            active: {
              base: theme.COLORS.secondary,
            },
            inactive: {
              base: theme.COLORS.defaultBorder,
            },
            activeThumb: {
              base: theme.COLORS.white,
            },
            inactiveThumb: {
              base: theme.COLORS.white,
            },
          }}
          passThroughInputProps={{ style: toggleInputStyles }}
        />
      </ReactToggleButtonContainer>
    </Container>
  );
};

Toggle.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
