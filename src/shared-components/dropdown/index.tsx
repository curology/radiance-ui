import React from 'react';
import PropTypes from 'prop-types';

import MobileDropdown from './mobileDropdown';
import DesktopDropdown from './desktopDropdown';
import allowNullPropType from '../../utils/allowNullPropType';

export type OptionType = {
  value: string;
  label: string;
  disabled?: boolean;
};

type DropdownProps = {
  value?: string;
  onChange: (option: OptionType) => void;
  options: OptionType[];
  optionsContainerMaxHeight?: string;
  textAlign: 'left' | 'center';
};

const defaultProps = {
  textAlign: 'left',
  onChange: () => undefined,
  optionsContainerMaxHeight: '250px',
  value: undefined,
};

const propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  value: allowNullPropType(PropTypes.any.isRequired),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      // eslint-disable-next-line react/forbid-prop-types
      value: PropTypes.any,
      label: PropTypes.string,
      disabled: PropTypes.bool,
    }),
  ).isRequired,
  textAlign: PropTypes.oneOf(['left', 'center']),
  onChange: PropTypes.func,
  optionsContainerMaxHeight: PropTypes.string,
};

class Dropdown extends React.Component<DropdownProps> {
  static defaultProps = defaultProps;

  static propTypes = propTypes;

  state = { isOpen: false };

  onSelectClick = () => {
    const { isOpen } = this.state;

    this.setState({ isOpen: !isOpen });
  };

  onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { onChange } = this.props;
    const {target} = event;
    const { value, selectedOptions } = target;

    if (selectedOptions && selectedOptions.length) {
      const { label } = selectedOptions[0];
      onChange({ value, label });
    }

    this.closeDropdown();
  };

  onOptionClick = (event: React.MouseEvent<HTMLLIElement>) => {
    const { onChange } = this.props;
    const target = event.target as HTMLSelectElement;
    if (target.hasAttribute('disabled')) {
      return;
    }

    const value = target.getAttribute('value') as string;
    const label = target.innerText;
    onChange({ value, label });
    this.closeDropdown();
  };

  closeDropdown = () => this.setState({ isOpen: false });

  render() {
    const { value, options, optionsContainerMaxHeight } = this.props;
    const { isOpen } = this.state;

    const touchSupported = 'ontouchstart' in document.documentElement;

    if (touchSupported) {
      return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <MobileDropdown {...this.props} onSelectChange={this.onSelectChange} />
      );
    }

    const currentOption = options.find(option => option.value === value);

    return (
      <DesktopDropdown
        isOpen={isOpen}
        onOptionClick={this.onOptionClick}
        closeDropdown={this.closeDropdown}
        onSelectClick={this.onSelectClick}
        currentOption={currentOption}
        optionsContainerMaxHeight={optionsContainerMaxHeight}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...this.props}
      />
    );
  }
}

export default Dropdown;
