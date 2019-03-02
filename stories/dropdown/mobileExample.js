import React from 'react';
import styled from '@emotion/styled';

import MobileDropdown from 'src/shared-components/dropdown/mobileDropdown';

const DropdownContainer = styled.div`
  padding-top: 30px;
  max-width: 500px;
  margin: 0 auto;
`;

export const MobileExampleDoc = `
# Mobile Dropdown Example
The mobile dropdown is built into the \`<Dropdown />\` component and cannot 
be used individually.\n\n\`<Dropdown /> \` will determine if the user is on 
a mobile device and render a true \`select\` tag with \`option\`(s). This is 
purely an example for desktop viewing. <!-- STORY -->
`;

class MobileExample extends React.Component {
  state = { value: null };

  options = [
    { value: 1, label: 'First option' },
    { value: 2, label: 'Second option (disabled)', disabled: true },
    { value: 3, label: 'Third option' },
  ];

  onChange = ({ value }) => {
    this.setState({ value: parseInt(value, 10) });
  };

  render() {
    return (
      <DropdownContainer>
        Select an option:
        <MobileDropdown
          value={this.state.value}
          options={this.options}
          onChange={this.onChange}
        />
      </DropdownContainer>
    );
  }
}

export default MobileExample;