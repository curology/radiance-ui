import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MobileDropdown } from './mobileDropdown';
import { DesktopDropdown } from './desktopDropdown';
import allowNullPropType from '../../utils/allowNullPropType';

export type OptionType = {
  /**
   * The option indentifier
   */
  value: string | undefined;
  /**
   * The text to be displayed for the option
   */
  label: string;
  disabled?: boolean;
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
   * The currently selected option. Can mount as `null`
   */
  value?: string;
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

  const onSelectClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
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

  const currentOption = options.find((option) => option.value === value);

  return (
    <DesktopDropdown
      borderRadius={borderRadius}
      closeDropdown={closeDropdown}
      currentOption={currentOption}
      isOpen={isOpen}
      onOptionClick={onOptionClick}
      onSelectClick={onSelectClick}
      options={options}
      optionsContainerMaxHeight={optionsContainerMaxHeight}
      textAlign={textAlign}
      value={value}
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
