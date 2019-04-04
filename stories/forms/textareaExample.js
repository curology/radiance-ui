import React from 'react';

import { Textarea } from 'src/shared-components';

class TextareaExample extends React.Component {
  state = { value: '' };

  onChange = event => this.setState({ value: event.target.value });

  render() {
    const { value } = this.state;
    return (
      <div>
        <Textarea value={value} onChange={this.onChange} />
      </div>
    );
  }
}
export default TextareaExample;
