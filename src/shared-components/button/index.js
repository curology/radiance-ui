import React from 'react';
import PropTypes from 'prop-types';

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
  };

  static defaultProps = {
    disabled: false,
    buttonType: 'primary',
    loading: false,
    onClick() {},
  };

  render() {
    const {
      onClick,
      disabled,
      children,
      buttonType,
      loading,
      icon,
      ...rest
    } = this.props;

    return (
      <ButtonBase
        disabled={disabled}
        onClick={!disabled && !loading ? onClick : event => event.preventDefault()}
        buttonType={buttonType}
        loading={loading}
        type="button"
        {...rest}
      >
        <ButtonContents loading={loading} hasIcon={!!icon}>
          {icon}
          <ButtonText
            loading={loading}
            hasIcon={!!icon}
            css="padding-top: 2px;"
          >
            {children}
          </ButtonText>
        </ButtonContents>
        <Loader
          loading={loading}
          disabled={disabled}
          buttonType={buttonType}
        />
      </ButtonBase>
    );
  }
}

export RoundButton from './components/roundButton';
export default Button;
