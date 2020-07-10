import React from 'react';
import { css } from '@emotion/core';
import { OptionButton } from 'src/shared-components';
import PlusIcon from 'src/svgs/icons/plus-icon.svg';
import MinusIcon from 'src/svgs/icons/minus-icon.svg';

class OptionButtonExample extends React.Component {
  state = {
    active: '',
  };

  onClick = (value: string) => {
    this.setState({
      active: value,
    });
  };

  render() {
    const { active } = this.state;

    return (
      <div
        css={css`
          margin: 0 auto;
          max-width: 350px;
          padding-top: 40px;
        `}
      >
        <OptionButton
          selected={active === 'improving'}
          text="Improving"
          subtext="fewer issues"
          onClick={() => this.onClick('improving')}
          optionType="radio"
          buttonType="primary"
          icon={<PlusIcon />}
        />
        <OptionButton
          selected={active === 'worsening'}
          text="Worsening"
          subtext="more issues than usual"
          onClick={() => this.onClick('worsening')}
          optionType="radio"
          buttonType="primary"
          icon={<MinusIcon />}
        />
      </div>
    );
  }
}

export default OptionButtonExample;
