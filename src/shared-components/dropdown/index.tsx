import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MobileDropdown } from './mobileDropdown';
import { DesktopDropdown } from './desktopDropdown';
import allowNullPropType from '../../utils/allowNullPropType';

export type OptionType = {
  disabled?: boolean;
  /**
   * The text to be displayed for the option
   */
  label: string;
  /**
   * The option indentifier
   */
  value?: string;
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
   * The currently selected option. Can mount as `undefined`
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
  options = [{ value: undefined, label: '' }],
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

  const onOptionClick = (
    event: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>,
  ) => {
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
        onSelectChange={onSelectChange}
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
  value: allowNullPropType(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),
};
