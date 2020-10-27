import React from 'react';
import { css } from '@emotion/core';
import useResetFocus from 'src/utils/accessibility/useResetFocus';

import { OffClickWrapper } from '../offClickWrapper';
import ChevronIcon from '../../svgs/icons/chevron-icon.svg';
import {
  DropdownContainer,
  DropdownFocusContainer,
  dropdownInputStyle,
  IconContainer,
  DropdownOptionsContainer,
  DropdownOption,
} from './style';

import { OptionType } from './index';

type DesktopDropdownProps = {
  borderRadius: string;
  closeDropdown: () => void;
  currentOption?: OptionType;
  isOpen: boolean;
  onDesktopSelectChange: (
    event: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>,
  ) => void;
  options: OptionType[];
  optionsContainerMaxHeight: string;
  textAlign: 'left' | 'center';
  toggleDropdown: () => void;
  value?: string | number;
};

export const DesktopDropdown = ({
  borderRadius,
  closeDropdown,
  currentOption,
  isOpen,
  onDesktopSelectChange,
  options,
  optionsContainerMaxHeight,
  textAlign,
  toggleDropdown,
  value,
}: DesktopDropdownProps) => {
  const { initialFocus, resetFocus } = useResetFocus<HTMLDivElement>();

  const handleKeyDown = (event: React.KeyboardEvent) => {
    // This key handler allows users to open the dropdown options via the keyboard
    if (event.key === 'Enter') {
      toggleDropdown();
    }
  };

  const handleOptionKeydown = (event: React.KeyboardEvent<HTMLLIElement>) => {
    // This allows users to select an option via the enter key
    if (event.key === 'Enter') {
      onDesktopSelectChange(event);
      resetFocus();
    }
  };

  return (
    <OffClickWrapper
      onOffClick={closeDropdown}
      css={css`
        width: 100%;
      `}
    >
      <DropdownContainer textAlign={textAlign}>
        <DropdownFocusContainer
          onClick={toggleDropdown}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          aria-haspopup="menu"
          role="button"
          ref={initialFocus}
        >
          <div
            css={dropdownInputStyle({
              borderRadius,
              shouldBeFullyRounded: !isOpen,
              textAlign,
            })}
          >
            {currentOption && currentOption.label}
          </div>
          <IconContainer>
            <ChevronIcon width={10} height={10} rotate={isOpen ? 90 : 0} />
          </IconContainer>
        </DropdownFocusContainer>

        <DropdownOptionsContainer
          borderRadius={borderRadius}
          isOpen={isOpen}
          optionsContainerMaxHeight={optionsContainerMaxHeight}
          role="menu"
          aria-activedescendant={`${value}`}
          aria-hidden={!isOpen}
        >
          {options.map((option, index) => {
            const {
              value: optionValue, disabled, label, ...rest 
            } = option;

            return (
              <DropdownOption
                key={optionValue || `undefined-${index}`}
                value={optionValue}
                id={`${optionValue}`}
                selected={value === optionValue}
                disabled={!!disabled}
                onClick={onDesktopSelectChange}
                onKeyDown={handleOptionKeydown}
                role="menuitemradio"
                aria-disabled={!!disabled}
                aria-checked={value === optionValue}
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
};
