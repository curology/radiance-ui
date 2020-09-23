import React from 'react';
import styled from '@emotion/styled';
import MobileDropdown from 'src/shared-components/dropdown/mobileDropdown';

const DropdownContainer = styled.div`
  padding-top: 30px;
  max-width: 500px;
  margin: 0 auto;
`;

class MobileExample extends React.Component {
  state = { value: null };

  options = [
    { value: 1, label: 'First option' },
    { value: 2, label: 'Second option (disabled)', disabled: true },
    { value: 3, label: 'Third option' },
  ];

  onChange = (event) => {
    const { value, selectedOptions } = event.target;

    if (selectedOptions && selectedOptions.length) {
      this.setState({ value });
    }
  };

  render() {
    const { value } = this.state;

    return (
      <DropdownContainer>
        Select an option:
        <MobileDropdown
          borderRadius="4px"
          value={value}
          options={this.options}
          onSelectChange={this.onChange}
        />
      </DropdownContainer>
    );
  }
}

export default MobileExample;
