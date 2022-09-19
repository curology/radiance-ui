import React from 'react';
import { useTheme } from '@emotion/react';

import { ChevronIcon } from '../../icons';
import Style from './style';

import { OptionType, OptionValue } from '.';

interface GenericConfigurableDropdownProps<T> {
  borderRadius: string;
  id?: string;
  onDropdownContainerFocus: (
    event: React.FocusEvent<HTMLSelectElement>,
  ) => void;
  onSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: T[];
  preventDisabledDefaultOption: boolean;
  textAlign: 'left' | 'center';
  value?: OptionValue;
}

/**
 * The generic configurable dropdown is built into the `<Dropdown />` component and cannot be used individually.
 *
 * `<Dropdown /> ` will determine if the user is on a mobile device and render the `select` element by providing mobile-friendly config options
 */
export const GenericConfigurableDropdown = <T extends OptionType>({
  borderRadius,
  id,
  onSelectChange,
  onDropdownContainerFocus,
  options,
  preventDisabledDefaultOption,
  textAlign,
  value,
}: GenericConfigurableDropdownProps<T>) => {
  const theme = useTheme();

  return (
    <Style.DropdownContainer textAlign={textAlign}>
      <select
        css={Style.dropdownInputStyle({
          borderRadius,
          shouldBeFullyRounded: true,
          textAlign,
          theme,
        })}
        id={id}
        value={value ?? ''}
        onChange={onSelectChange}
        onFocus={onDropdownContainerFocus}
      >
        {options.map((option, index) => {
          let isDisabled = option.disabled;

          /*
           * Covers the case where default value is disabled
           * In mobile you cannot have a selected value as disabled option
           */
          if (option.value === value && preventDisabledDefaultOption) {
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
