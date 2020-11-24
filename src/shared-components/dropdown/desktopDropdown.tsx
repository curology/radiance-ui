import React from 'react';
import { css } from '@emotion/core';
import useResetFocus from 'src/utils/accessibility/useResetFocus';
import { useTheme } from 'emotion-theming';

import { OffClickWrapper } from '../offClickWrapper';
import { ChevronIcon } from '../../icons';
import {
  DropdownContainer,
  DropdownFocusContainer,
  dropdownInputStyle,
  IconContainer,
  DropdownOptionsContainer,
  DropdownOption,
} from './style';

import { OptionType, OptionValue } from './index';

type DesktopDropdownProps<T> = {
  borderRadius: string;
  closeDropdown: () => void;
  currentOption?: T;
  isOpen: boolean;
  onDesktopSelectChange: (
    event: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>,
  ) => void;
  options: T[];
  optionsContainerMaxHeight: string;
  textAlign: 'left' | 'center';
  toggleDropdown: () => void;
  value?: OptionValue;
};

export const DesktopDropdown = <T extends OptionType>({
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
}: DesktopDropdownProps<T>) => {
  const theme = useTheme();
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
              theme,
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
          aria-activedescendant={value ? `${value}` : undefined}
          aria-hidden={!isOpen}
        >
          {options.map((option, index) => {
            const { value: optionValue, disabled, label, ...rest } = option;

            const id = optionValue ? `${optionValue}` : `undefined-${index}`;

            return (
              <DropdownOption
                key={id}
                value={optionValue}
                id={id}
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
