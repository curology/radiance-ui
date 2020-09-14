import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MobileDropdown from './mobileDropdown';
import DesktopDropdown from './desktopDropdown';
import allowNullPropType from '../../utils/allowNullPropType';

export type OptionType = {
  value: string | undefined;
  label: string;
  disabled?: boolean;
};

type DropdownProps = {
  borderRadius?: string;
  onChange: (option: OptionType) => void;
  options: OptionType[];
  optionsContainerMaxHeight?: string;
  textAlign?: 'left' | 'center';
  value?: string;
};

const Dropdown = ({
  borderRadius = '4px',
  onChange,
  options,
  optionsContainerMaxHeight = '250px',
  textAlign = 'left',
  value,
  ...rest
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const touchSupported = 'ontouchstart' in document.documentElement;

  const onSelectClick = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  const closeDropdown = () => setIsOpen(false);

  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { target } = event;
    const { value: nextValue, selectedOptions } = target;

    if (selectedOptions && selectedOptions.length) {
      const { label } = selectedOptions[0];
      onChange({ value: nextValue, label });
    }

    closeDropdown();
  };

  const onOptionClick = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.currentTarget;
    if (target.hasAttribute('disabled')) {
      return;
    }

    const nextValue = target.getAttribute('value') as string;
    const label = target.innerText;
    onChange({ value: nextValue, label });
    closeDropdown();
  };

  if (touchSupported) {
    return (
      <MobileDropdown
        borderRadius={borderRadius}
        value={value}
        options={options}
        textAlign={textAlign}
        onSelectChange={onSelectChange}
      />
    );
  }

  const currentOption = options.find(option => option.value === value);

  return (
    <DesktopDropdown
      borderRadius={borderRadius}
      isOpen={isOpen}
      onOptionClick={onOptionClick}
      closeDropdown={closeDropdown}
      onSelectClick={onSelectClick}
      currentOption={currentOption}
      optionsContainerMaxHeight={optionsContainerMaxHeight}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    />
  );
};

Dropdown.propTypes = {
  borderRadius: PropTypes.string,
  value: allowNullPropType(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
      disabled: PropTypes.bool,
    }),
  ).isRequired,
  textAlign: PropTypes.oneOf(['left', 'center']),
  onChange: PropTypes.func.isRequired,
  optionsContainerMaxHeight: PropTypes.string,
};

export default Dropdown;
