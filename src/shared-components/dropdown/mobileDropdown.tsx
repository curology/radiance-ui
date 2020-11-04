import React from 'react';
import { useTheme } from 'emotion-theming';

import ChevronIcon from '../../svgs/icons/chevron-icon.svg';
import { DropdownContainer, dropdownInputStyle, IconContainer } from './style';

import { OptionType, OptionValue } from '.';

type MobileDropdownProps<T extends OptionType> = {
  borderRadius: string;
  onMobileSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: T[];
  textAlign: 'left' | 'center';
  value?: OptionValue;
};

/**
 * The mobile dropdown is built into the `<Dropdown />` component and cannot be used individually.
 *
 * `<Dropdown /> ` will determine if the user is on a mobile device and render a true `select` tag with `option`(s).
 */
export const MobileDropdown = <T extends OptionType>({
  borderRadius,
  onMobileSelectChange,
  options,
  textAlign,
  value,
}: MobileDropdownProps<T>) => {
  const theme = useTheme();

  return (
    <DropdownContainer textAlign={textAlign}>
      <select
        css={dropdownInputStyle({
          borderRadius,
          shouldBeFullyRounded: true,
          textAlign,
          theme,
        })}
        value={value || ''}
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
              key={option.value || `undefined-${index}`}
              value={option.value}
              disabled={isDisabled}
            >
              {option.label}
            </option>
          );
        })}
      </select>
      <IconContainer>
        <ChevronIcon width={10} height={10} />
      </IconContainer>
    </DropdownContainer>
  );
};
