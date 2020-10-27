import PropTypes from 'prop-types';
import React from 'react';
// @ts-ignore
import ToggleButton from 'react-toggle-button';

import { COLORS } from '../../constants';
import {
  Container,
  Label,
  ReactToggleButtonContainer,
  trackStyle,
  thumbStyle,
} from './style';

type ToggleProps = {
  checked?: boolean;
  label?: string;
  onChange: () => void;
};

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
}: ToggleProps) => (
  <Container>
    {label && <Label onClick={onChange}>{label}</Label>}
    <ReactToggleButtonContainer>
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
            base: COLORS.secondary,
          },
          inactive: {
            base: COLORS.defaultBorder,
          },
          activeThumb: {
            base: COLORS.white,
          },
          inactiveThumb: {
            base: COLORS.white,
          },
        }}
        passThroughInputProps={{ style: toggleInputStyles }}
      />
    </ReactToggleButtonContainer>
  </Container>
);

Toggle.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
