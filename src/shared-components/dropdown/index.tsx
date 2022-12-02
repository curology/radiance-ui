import React from 'react';
import { useTheme } from '@emotion/react';

import { ChevronIcon } from '../../icons';
import Style from './style';

export type OptionValue = string | number;

export interface OptionType {
  disabled?: boolean;
  /**
   * The text to be displayed for the option
   */
  label: string;
  /**
   * The option indentifier
   */
  value?: OptionValue;
  /**
   * Any other data we want to pass from options
   */
  [key: string]: unknown;
}

interface DropdownProps<T> {
  /**
   * An optional prop to allow for the select to have an aria-label attribute added for applications where a standalone label isn't ideal.
   */
  ariaLabel?: string | undefined;
  borderRadius?: string;
  /**
   * ID for label associated control
   */
  id?: string;
  /**
   * The handler to be invoked on option change
   */
  onChange: (option: T) => void;
  /**
   * The handler to be invoked on focus
   */
  onDropdownContainerFocus?: (event?: React.FocusEvent) => void;
  options: T[];
  textAlign?: 'left' | 'center';
  /**
   * The currently selected option
   */
  value?: OptionValue;
}

/**
 * `<Dropdown />` is a controlled component and should be wrapped by a parent to control the dropdown's state.
 * This ships with a mobile-friendly implementation that will handle mobile devices automatically.
 */
export const Dropdown = <T extends OptionType>({
  borderRadius,
  id,
  onChange,
  onDropdownContainerFocus,
  options,
  textAlign = 'left',
  value,
  ariaLabel,
}: DropdownProps<T>) => {
  const theme = useTheme();
  const touchSupported = 'ontouchstart' in document.documentElement;
  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { target } = event;
    const { selectedIndex, selectedOptions } = target;
    const selectedOption = options[selectedIndex];

    if (selectedOptions.length) {
      onChange(selectedOption);
    }
  };

  const handleOnDropdownContainerFocus = (event: React.FocusEvent) => {
    if (onDropdownContainerFocus) {
      onDropdownContainerFocus(event);
    }
  };

  return (
    <Style.DropdownContainer textAlign={textAlign}>
      <select
        css={Style.dropdownInputStyle({
          borderRadius: borderRadius ?? theme.BORDER_RADIUS.small,
          shouldBeFullyRounded: true,
          textAlign,
          theme,
        })}
        id={id}
        value={value ?? ''}
        aria-label={ariaLabel}
        onChange={onSelectChange}
        onFocus={handleOnDropdownContainerFocus}
      >
        {options.map((option, index) => {
          let isDisabled = option.disabled;

          /*
           * We use touchSupported to prevent setting the default value to disabled
           */
          if (option.value === value && touchSupported) {
            isDisabled = false;
          }

          return (
            <option
              key={option.value ?? `undefined-${index}`}
              value={option.value}
              disabled={isDisabled}
            >
              {option.label}
            </option>
          );
        })}
      </select>
      <Style.IconContainer>
        <ChevronIcon width={15} height={15} />
      </Style.IconContainer>
    </Style.DropdownContainer>
  );
};
