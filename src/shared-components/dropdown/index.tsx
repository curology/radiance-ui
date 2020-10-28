import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MobileDropdown } from './mobileDropdown';
import { DesktopDropdown } from './desktopDropdown';

export type OptionType = {
  disabled?: boolean;
  /**
   * The text to be displayed for the option
   */
  label: string;
  /**
   * The option indentifier
   */
  value?: string | number;
};

type DropdownProps = {
  borderRadius?: string;
  /**
   * The handler to be invoked on option change
   */
  onChange: (option: OptionType) => void;
  options: OptionType[];
  /**
   * Specifies maximum height of the expanded dropdown
   */
  optionsContainerMaxHeight?: string;
  textAlign?: 'left' | 'center';
  /**
   * The currently selected option
   */
  value?: string | number;
};

/**
 * `<Dropdown />` is a controlled component and should be wrapped by a parent to control the dropdown's state.
 * This ships with a mobile implementation that will handle mobile devices automatically.
 */
export const Dropdown = ({
  borderRadius = '4px',
  onChange,
  options,
  optionsContainerMaxHeight = '250px',
  textAlign = 'left',
  value,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const touchSupported = 'ontouchstart' in document.documentElement;

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const closeDropdown = () => setIsOpen(false);

  const onMobileSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { target } = event;
    const { value: nextValue, selectedOptions } = target;
    if (selectedOptions && selectedOptions.length) {
      const { label } = selectedOptions[0];
      onChange({ value: nextValue, label });
    }

    closeDropdown();
  };

  const onDesktopSelectChange = (
    event: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>,
  ) => {
    const { currentTarget } = event;
    if (currentTarget.hasAttribute('disabled')) {
      return;
    }

    // Next Value may be returned as null if the value of <li> is undefined. We want to cast to the real value of undefined
    const nextValue = currentTarget.getAttribute('value') || undefined;
    const selectedOption = options.find((option) => {
      if (nextValue === undefined && option.value === undefined) {
        return true;
      }
      // This covers numbers and strings. <li> value is always returned as string
      return `${option.value}` === nextValue;
    });

    if (selectedOption) {
      onChange(selectedOption);
    }
    closeDropdown();
  };

  if (touchSupported) {
    return (
      <MobileDropdown
        borderRadius={borderRadius}
        onMobileSelectChange={onMobileSelectChange}
        options={options}
        textAlign={textAlign}
        value={value}
      />
    );
  }

  const currentOption = options.find((option) => option.value === value);

  return (
    <DesktopDropdown
      borderRadius={borderRadius}
      closeDropdown={closeDropdown}
      currentOption={currentOption}
      isOpen={isOpen}
      onDesktopSelectChange={onDesktopSelectChange}
      options={options}
      optionsContainerMaxHeight={optionsContainerMaxHeight}
      textAlign={textAlign}
      toggleDropdown={toggleDropdown}
      value={value}
    />
  );
};

Dropdown.propTypes = {
  borderRadius: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
      disabled: PropTypes.bool,
    }),
  ).isRequired,
  optionsContainerMaxHeight: PropTypes.string,
  textAlign: PropTypes.oneOf(['left', 'center']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
