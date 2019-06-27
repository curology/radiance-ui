import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import Loader from './shared-components/loader';
import Container from './shared-components/container';
import { ButtonBase, ButtonText, ButtonContents } from './style';

class Button extends React.Component {
  static Container = Container;

  static propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
    buttonType: PropTypes.oneOf([
      'primary',
      'secondary',
      'tertiary',
      'quaternary',
    ]),
    isLoading: PropTypes.bool,
    icon: PropTypes.node,
    textColor: PropTypes.string,
  };

  static defaultProps = {
    disabled: false,
    buttonType: 'primary',
    isLoading: false,
    onClick() {},
    textColor: '',
  };

  render() {
    const {
      onClick,
      disabled,
      children,
      buttonType,
      isLoading,
      icon,
      textColor,
      ...rest
    } = this.props;

    return (
      <ButtonBase
        disabled={disabled}
        onClick={!disabled && !isLoading ? onClick : event => event.preventDefault()}
        buttonType={buttonType}
        isLoading={isLoading}
        type="button"
        textColor={textColor}
        {...rest}
      >
        <ButtonContents isLoading={isLoading} hasIcon={!!icon}>
          {icon}
          <ButtonText
            isLoading={isLoading}
            hasIcon={!!icon}
            css={css`padding-top: 2px;`}
          >
            {children}
          </ButtonText>
        </ButtonContents>
        <Loader
          isLoading={isLoading}
          disabled={disabled}
          buttonType={buttonType}
          textColor={textColor}
        />
      </ButtonBase>
    );
  }
}

export LinkButton from './components/linkButton';
export RoundButton from './components/roundButton';
export TextButton from './components/textButton';
export default Button;
