import React from 'react';
import PropTypes from 'prop-types';

import MobileDropdown from './mobileDropdown';
import DesktopDropdown from './desktopDropdown';

const defaultProps = {
  textAlign: 'left',
  onChange() {},
};

const propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      label: PropTypes.string,
      disabled: PropTypes.bool,
    })
  ).isRequired,
  textAlign: PropTypes.oneOf(['left', 'center']),
  onChange: PropTypes.func,
};

class Dropdown extends React.Component {
  state = { isOpen: false };

  onSelectClick = () => this.setState({ isOpen: !this.state.isOpen });

  onSelectChange = event => {
    const { value, selectedOptions } = event.target;

    if (selectedOptions && selectedOptions.length) {
      const { label } = selectedOptions[0];
      this.props.onChange({ value, label });
    }

    this.closeDropdown();
  };

  onOptionClick = event => {
    if (event.target.hasAttribute('disabled')) {
      return;
    }
    const value = event.target.getAttribute('value');
    const label = event.target.innerText;
    this.props.onChange({ value, label });
    this.closeDropdown();
  };

  closeDropdown = () => this.setState({ isOpen: false });

  render() {
    const { value, options } = this.props;
    const { isOpen } = this.state;

    const touchSupported = 'ontouchstart' in document.documentElement;

    if (touchSupported) {
      return (
        <MobileDropdown {...this.props} onSelectChange={this.onSelectChange} />
      );
    }

    const currentOption = options.find(option => option.value === value);

    return (
      <DesktopDropdown
        {...this.props}
        isOpen={isOpen}
        onOptionClick={this.onOptionClick}
        closeDropdown={this.closeDropdown}
        onSelectClick={this.onSelectClick}
        currentOption={currentOption}
      />
    );
  }
}

Dropdown.defaultProps = defaultProps;
Dropdown.propTypes = propTypes;

export default Dropdown;
