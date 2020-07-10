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

import { OptionType } from './index';

type DesktopDropdownProps = {
  value?: string;
  options: OptionType[];
  currentOption: OptionType;
  textAlign: 'left' | 'center';
  closeDropdown: () => void;
  onOptionClick: (event: any) => void;
  onSelectClick: () => void;
  isOpen: boolean;
  optionsContainerMaxHeight?: string;
};

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
}: DesktopDropdownProps) => (
  <OffClickWrapper
    onOffClick={closeDropdown}
    css={css`
      width: 100%;
    `}
  >
    <DropdownContainer textAlign={textAlign}>
      <div
        id="select-input-box"
        onClick={onSelectClick}
        onKeyDown={(event: React.KeyboardEvent) => {
          if (event.key === 'Enter') {
            onSelectClick();
          }
        }}
        tabIndex={0}
        aria-label="Open dropdown option"
        aria-haspopup="listbox"
        role="button"
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
        role="listbox"
        aria-activedescendant={value}
        tabIndex={-1}
        aria-labelledby="select-input-box"
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
              disabled={!!disabled}
              onClick={onOptionClick}
              onKeyDown={event => {
                if (event.key === 'Enter') {
                  onOptionClick(event);
                }
              }}
              role="option"
              aria-selected={value === optionValue}
              tabIndex={isOpen && !disabled ? 0 : -1}
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
  value: undefined,
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
