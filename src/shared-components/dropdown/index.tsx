import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';
import { GenericConfigurableDropdown } from './genericConfigurableDropdown'

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
  /**
   * Specifies maximum height of the expanded dropdown
   */
  optionsContainerMaxHeight?: string;
  textAlign?: 'left' | 'center';
  /**
   * The currently selected option
   */
  value?: OptionValue;
}

/**
 * `<Dropdown />` is a controlled component and should be wrapped by a parent to control the dropdown's state.
 * This ships with a mobile implementation that will handle mobile devices automatically.
 */
export const Dropdown = <T extends OptionType>({
  borderRadius,
  id,
  onChange,
  onDropdownContainerFocus,
  options,
  textAlign = 'left',
  value,
}: DropdownProps<T>) => {
  const theme = useTheme();
  //const [isOpen, setIsOpen] = useState(false);
  const touchSupported = 'ontouchstart' in document.documentElement;
  const borderRadiusValue = borderRadius ?? theme.BORDER_RADIUS.small;
  const onSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
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

  // if (touchSupported) {}
  return (
    <GenericConfigurableDropdown
      borderRadius={borderRadiusValue}
      id={id}
      onDropdownContainerFocus={handleOnDropdownContainerFocus}
      onSelectChange={onSelectChange}
      preventDisabledDefaultOption={touchSupported}
      options={options}
      textAlign={textAlign}
      value={value}
    />
  );
};

Dropdown.propTypes = {
  borderRadius: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
    }).isRequired,
  ).isRequired,
  optionsContainerMaxHeight: PropTypes.string,
  textAlign: PropTypes.oneOf(['left', 'center']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
