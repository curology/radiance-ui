import React from 'react';
import { OptionButton } from 'src/shared-components';
import PlusIcon from 'src/svgs/icons/plus-icon.svg';
import MinusIcon from 'src/svgs/icons/minus-icon.svg';
import { ExampleContainer } from './style';

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
      <ExampleContainer>
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
      </ExampleContainer>
    );
  }
}

export default OptionButtonExample;
