import React from 'react';
import { useTheme } from '@emotion/react';

import { ChevronIcon } from '../../icons';
import Style from './style';

import { OptionType, OptionValue } from '.';

interface MobileDropdownProps<T> {
  borderRadius: string;
  id?: string;
  onMobileSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: T[];
  textAlign: 'left' | 'center';
  value?: OptionValue;
}

/**
 * The mobile dropdown is built into the `<Dropdown />` component and cannot be used individually.
 *
 * `<Dropdown /> ` will determine if the user is on a mobile device and render a true `select` tag with `option`(s).
 */
export const MobileDropdown = <T extends OptionType>({
  borderRadius,
  id,
  onMobileSelectChange,
  options,
  textAlign,
  value,
}: MobileDropdownProps<T>) => {
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
        onChange={onMobileSelectChange}
      >
        {options.map((option, index) => {
          let isDisabled = option.disabled;

          // Covers the case where default value is disabled
          // In mobile you cannot have a selected value as disabled option
          if (option.value === value) {
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
        <ChevronIcon width={10} height={10} />
      </Style.IconContainer>
    </Style.DropdownContainer>
  );
};
