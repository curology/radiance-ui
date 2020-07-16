import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import OffClickWrapper from '../offClickWrapper';
import ChevronIcon from '../../svgs/icons/chevron-icon.svg';
import {
  DropdownContainer,
  dropdownInputStyle,
  IconContainer,
  DropdownOptionsContainer,
  DropdownOption,
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
  optionsContainerMaxHeight,
}) => (
  <OffClickWrapper
    onOffClick={closeDropdown}
    css={css`
      width: 100%;
    `}
  >
    <DropdownContainer textAlign={textAlign}>
      <div
        id="select-input-box"
        role="button"
        onClick={onSelectClick}
        onKeyDown={onSelectClick}
        tabIndex="0"
      >
        <div css={dropdownInputStyle({ textAlign })}>
          {currentOption && currentOption.label}
        </div>
        <IconContainer>
          <ChevronIcon width={10} height={10} rotate={isOpen ? 90 : 0} />
        </IconContainer>
      </div>

      <DropdownOptionsContainer
        isOpen={isOpen}
        optionsContainerMaxHeight={optionsContainerMaxHeight}
      >
        {options.map(option => {
          const {
            value: optionValue, disabled, label, ...rest 
          } = option;

          return (
            <DropdownOption
              key={optionValue}
              value={optionValue}
              selected={value === optionValue}
              aria-disabled={disabled}
              disabled={disabled}
              onClick={onOptionClick}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...rest}
            >
              {label}
            </DropdownOption>
          );
        })}
      </DropdownOptionsContainer>
    </DropdownContainer>
  </OffClickWrapper>
);

DesktopDropdown.defaultProps = {
  value: null,
  options: [{ value: null, label: '' }],
  currentOption: { value: null, label: '' },
  textAlign: 'left',
  closeDropdown: () => undefined,
  onOptionClick: () => undefined,
  onSelectClick: () => undefined,
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
    }),
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
  optionsContainerMaxHeight: PropTypes.string.isRequired,
};

export default DesktopDropdown;
