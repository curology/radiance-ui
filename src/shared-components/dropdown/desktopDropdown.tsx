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
  onOptionClick: (
    event: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>,
  ) => void;
  onSelectClick: () => void;
  options: OptionType[];
  optionsContainerMaxHeight: string;
  textAlign: 'left' | 'center';
  value?: string | number | null;
};

export const DesktopDropdown = ({
  borderRadius,
  closeDropdown,
  currentOption,
  isOpen,
  onOptionClick,
  onSelectClick,
  options,
  optionsContainerMaxHeight,
  textAlign,
  value,
}: DesktopDropdownProps) => {
  const { initialFocus, resetFocus } = useResetFocus<HTMLDivElement>();

  const handleKeyDown = (event: React.KeyboardEvent) => {
    // This key handler allows users to open the dropdown options via the keyboard
    if (event.key === 'Enter') {
      onSelectClick();
    }
  };

  const handleOptionKeydown = (event: React.KeyboardEvent<HTMLLIElement>) => {
    // This allows users to select an option via the enter key
    if (event.key === 'Enter') {
      onOptionClick(event);
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
          onClick={onSelectClick}
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
          aria-activedescendant={value as string}
          aria-hidden={!isOpen}
        >
          {options.map((option) => {
            const {
              value: optionValue, disabled, label, ...rest 
            } = option;

            return (
              <DropdownOption
                key={optionValue}
                value={optionValue}
                id={optionValue as string}
                selected={value === optionValue}
                disabled={!!disabled}
                onClick={onOptionClick}
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
