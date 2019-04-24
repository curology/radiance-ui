import React from 'react';

import { Toggle } from 'src/shared-components';

class ToggleExample extends React.Component {
  state = {
    checked: false,
  };

  onChange = () => {
    const { checked } = this.state;
    this.setState({
      checked: !checked,
    });
  };

  render() {
    const { checked } = this.state;

    return (
      <Toggle
        checked={checked}
        label="Interactive Toggle"
        onChange={this.onChange}
      />
    );
  }
}

export default ToggleExample;
