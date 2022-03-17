import React from 'react';
import { css, useTheme } from '@emotion/react';

import useResetFocus from '../../utils/accessibility/useResetFocus';
import { isDefined } from '../../utils/isDefined';
import { keyboardKeys } from '../../constants/keyboardKeys';
import { OffClickWrapper } from '../offClickWrapper';
import { ChevronIcon } from '../../icons';
import Style from './style';

import { OptionType, OptionValue } from './index';

interface DesktopDropdownProps<T> {
  borderRadius: string;
  closeDropdown: () => void;
  currentOption?: T;
  id?: string;
  isOpen: boolean;
  onDesktopSelectChange: (
    event: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>,
  ) => void;
  onDropdownContainerFocus: (event: React.FocusEvent<HTMLDivElement>) => void;
  options: T[];
  optionsContainerMaxHeight: string;
  textAlign: 'left' | 'center';
  toggleDropdown: () => void;
  value?: OptionValue;
}

export const DesktopDropdown = <T extends OptionType>({
  borderRadius,
  closeDropdown,
  currentOption,
  id,
  isOpen,
  onDesktopSelectChange,
  onDropdownContainerFocus,
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
    if (event.key === keyboardKeys.enter) {
      toggleDropdown();
    }
  };

  const handleOptionKeydown = (event: React.KeyboardEvent<HTMLLIElement>) => {
    // This allows users to select an option via the enter key
    if (event.key === keyboardKeys.enter) {
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
      <Style.DropdownContainer textAlign={textAlign}>
        <Style.DropdownFocusContainer
          onClick={toggleDropdown}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          aria-haspopup="menu"
          role="button"
          ref={initialFocus}
          onFocus={onDropdownContainerFocus}
        >
          <div
            css={Style.dropdownInputStyle({
              borderRadius,
              shouldBeFullyRounded: !isOpen,
              textAlign,
              theme,
            })}
          >
            {currentOption?.label}
          </div>
          <Style.IconContainer>
            <ChevronIcon
              width={10}
              height={10}
              rotate={isOpen ? 90 : 0}
            />
          </Style.IconContainer>
        </Style.DropdownFocusContainer>

        <Style.DropdownOptionsContainer
          borderRadius={borderRadius}
          id={id}
          isOpen={isOpen}
          optionsContainerMaxHeight={optionsContainerMaxHeight}
          role="menu"
          aria-activedescendant={isDefined(value) ? `${value}` : undefined}
          aria-hidden={!isOpen}
        >
          {options.map((option, index) => {
            const {
              value: optionValue,
              disabled = false,
              label,
              ...rest
            } = option;

            const optionId = isDefined(optionValue)
              ? `${optionValue}`
              : `undefined-${index}`;

            return (
              <Style.DropdownOption
                key={optionId}
                value={optionValue}
                id={optionId}
                selected={value === optionValue}
                disabled={disabled}
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
              </Style.DropdownOption>
            );
          })}
        </Style.DropdownOptionsContainer>
      </Style.DropdownContainer>
    </OffClickWrapper>
  );
};
