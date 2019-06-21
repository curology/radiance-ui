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
    loading: PropTypes.bool,
    icon: PropTypes.node,
    textColor: PropTypes.string,
    fullWidth: PropTypes.bool,
  };

  static defaultProps = {
    disabled: false,
    buttonType: 'primary',
    loading: false,
    onClick() {},
    textColor: '',
    fullWidth: false,
  };

  render() {
    const {
      onClick,
      disabled,
      children,
      buttonType,
      loading,
      icon,
      textColor,
      fullWidth,
      ...rest
    } = this.props;

    return (
      <ButtonBase
        disabled={disabled}
        onClick={!disabled && !loading ? onClick : event => event.preventDefault()}
        buttonType={buttonType}
        loading={loading}
        type="button"
        textColor={textColor}
        fullWidth={fullWidth}
        {...rest}
      >
        <ButtonContents loading={loading} hasIcon={!!icon}>
          {icon}
          <ButtonText
            loading={loading}
            hasIcon={!!icon}
            css={css`padding-top: 2px;`}
          >
            {children}
          </ButtonText>
        </ButtonContents>
        <Loader
          loading={loading}
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
