import React from 'react';
import { css } from '@emotion/core';

import { OptionButton } from 'src/shared-components';

class OptionButtonExample extends React.Component {
  state = {
    activeIndex: 0,
  };

  options = ['Good!', 'Not so well...'];

  onClick = index => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <div
        css={css`
          margin: 0 auto;
          max-width: 350px;
          padding-top: 40px;
        `}
      >
        {this.options.map((text, index) => (
          <div
            css={css`
              margin-bottom: 32px;
            `}
            key={text}
          >
            <OptionButton
              selected={activeIndex === index}
              text={text}
              onClick={() => this.onClick(index)}
              optionType="radio"
              styleType="primary"
            />
          </div>
        ))}
      </div>
    );
  }
}

export default OptionButtonExample;
