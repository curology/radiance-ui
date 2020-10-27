import React from 'react';

import ChevronIcon from '../../svgs/icons/chevron-icon.svg';
import { DropdownContainer, dropdownInputStyle, IconContainer } from './style';

import { OptionType } from '.';

type MobileDropdownProps = {
  borderRadius: string;
  onSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: OptionType[];
  textAlign: 'left' | 'center';
  value?: string | number | null;
};

/**
 * The mobile dropdown is built into the `<Dropdown />` component and cannot be used individually.
 *
 * `<Dropdown /> ` will determine if the user is on a mobile device and render a true `select` tag with `option`(s).
 */
export const MobileDropdown = ({
  borderRadius,
  onSelectChange,
  options,
  textAlign,
  value,
}: MobileDropdownProps) => (
  <DropdownContainer textAlign={textAlign}>
    <select
      css={dropdownInputStyle({
        borderRadius,
        shouldBeFullyRounded: true,
        textAlign,
      })}
      value={value || ''}
      onChange={onSelectChange}
    >
      {options.map((option) => {
        let isDisabled = option.disabled;

        // Covers the case where default value is disabled
        // In mobile you cannot have a selected value as disabled option
        if (option.value === value) {
          isDisabled = false;
        }

        return (
          <option key={option.value} value={option.value} disabled={isDisabled}>
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
