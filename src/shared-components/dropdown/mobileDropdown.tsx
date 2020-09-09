import React from 'react';
import PropTypes from 'prop-types';

import ChevronIcon from '../../svgs/icons/chevron-icon.svg';
import { DropdownContainer, dropdownInputStyle, IconContainer } from './style';

import { OptionType } from './index';

type MobileDropdownProps = {
  value: string | number | null;
  options: OptionType[];
  textAlign: 'left' | 'center';
  onSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const MobileDropdown = ({
  textAlign,
  value,
  onSelectChange,
  options,
}: MobileDropdownProps) => (
  <DropdownContainer textAlign={textAlign}>
    <select
      css={dropdownInputStyle({ textAlign, shouldBeFullyRounded: true })}
      value={value || ''}
      onChange={onSelectChange}
    >
      {options.map(option => {
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

MobileDropdown.defaultProps = {
  value: null,
  options: [{ value: null, label: '' }],
  textAlign: 'left',
  onSelectChange: () => undefined,
};

MobileDropdown.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
      disabled: PropTypes.bool,
    }),
  ),
  textAlign: PropTypes.oneOf(['left', 'center']),
  onSelectChange: PropTypes.func,
};

export default MobileDropdown;
