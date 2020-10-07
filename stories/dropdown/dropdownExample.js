import React from 'react';
import styled from '@emotion/styled';
import Dropdown from 'src/shared-components/dropdown';

const DropdownContainer = styled.div`
  padding-top: 30px;
  max-width: 500px;
  margin: 0 auto;
`;

class DropdownExample extends React.Component {
  state = { value: null };

  options = [
    { value: 1, label: 'First option' },
    { value: 2, label: 'Second option (disabled)', disabled: true },
    { value: 3, label: 'Third option' },
    { value: 4, label: 'Fourth option' },
  ];

  onChange = ({ value }) => {
    this.setState({ value: parseInt(value, 10) });
  };

  render() {
    const { value } = this.state;

    return (
      <DropdownContainer>
        Select an option:
        <Dropdown
          value={value}
          options={this.options}
          onChange={this.onChange}
        />
      </DropdownContainer>
    );
  }
}

export default DropdownExample;
