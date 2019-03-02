import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import OffClickWrapper from '../offClickWrapper';
import { ChevronIcon } from '../../icons';
import {
  SelectOuterContainer,
  selectInputStyle,
  IconContainer,
  SelectOptionsContainer,
  SelectOption,
} from './style';

const DesktopDropdown = ({
  value,
  options,
  textAlign,
  currentOption,
  closeDropdown,
  onOptionClick,
  onSelectClick,
  isOpen,
}) => (
  <OffClickWrapper onOffClick={closeDropdown} css={css`width: 100%;`}>
    <SelectOuterContainer textAlign={textAlign}>
      <div id="select-input-box" onClick={onSelectClick}>
        <div css={selectInputStyle({ textAlign })}>
          {currentOption && currentOption.label}
        </div>
        <IconContainer>
          <ChevronIcon width={10} height={10} rotate={isOpen ? 90 : 0} />
        </IconContainer>
      </div>

      <SelectOptionsContainer isOpen={isOpen}>
        {options.map(option => (
          <SelectOption
            key={option.value}
            value={option.value}
            selected={value === option.value}
            disabled={option.disabled}
            onClick={onOptionClick}
            data-dusk-id={`selectOption-${option.value}`}
          >
            {option.label}
          </SelectOption>
        ))}
      </SelectOptionsContainer>
    </SelectOuterContainer>
  </OffClickWrapper>
);

DesktopDropdown.defaultProps = {
  value: null,
  options: [{ value: null, label: '' }],
  currentOption: { value: null, label: '' },
  textAlign: 'left',
  closeDropdown() {},
  onOptionClick() {},
  onSelectClick() {},
  isOpen: false,
};

DesktopDropdown.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      // eslint-disable-next-line react/forbid-prop-types
      value: PropTypes.any,
      label: PropTypes.string,
      disabled: PropTypes.bool,
    })
  ),
  textAlign: PropTypes.oneOf(['left', 'center']),
  currentOption: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    value: PropTypes.any,
    label: PropTypes.string,
    disabled: PropTypes.bool,
  }),
  closeDropdown: PropTypes.func,
  onOptionClick: PropTypes.func,
  onSelectClick: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default DesktopDropdown;
