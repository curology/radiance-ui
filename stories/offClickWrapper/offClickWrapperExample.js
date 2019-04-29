import React from 'react';

import { OffClickWrapper, Container } from 'src/shared-components';

class OffClickWrapperExample extends React.Component {
  state = {
    text: 'Click outside this container to call the onOffClick handler...',
  };

  handleOffClick = () => {
    this.setState({
      text: 'You clicked outside the container!!!',
    });
  };

  render() {
    const { text } = this.state;

    return (
      <OffClickWrapper onOffClick={this.handleOffClick}>
        <Container type="message">
          <Container.Section>{text}</Container.Section>
        </Container>
      </OffClickWrapper>
    );
  }
}

export default OffClickWrapperExample;
