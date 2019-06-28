import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import Loader from './shared-components/loader';
import Container from './shared-components/container';
import { ButtonBase, ButtonText, ButtonContents } from './style';
import withDeprecationWarning from '../../utils/withDeprecationWarning';

const deprecatedProperties = {
  loading: "The 'loading' prop is deprecated. Use 'isLoading' instead.",
};

const isLoadingPropFunction = (props, propName, componentName) => {
  if (props[propName] !== undefined) {
    return new Error(
      `'loading' prop will be deprecated in a future major release. Please rename 'loading' to 'isLoading' in ${componentName}`
    );
  }
};

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
    loading: isLoadingPropFunction,
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
      loading,
      isLoading,
      icon,
      textColor,
      ...rest
    } = this.props;

    const loadingVal = loading === undefined ? isLoading : loading;

    return (
      <ButtonBase
        disabled={disabled}
        onClick={
          !disabled && !loadingVal ? onClick : event => event.preventDefault()
        }
        buttonType={buttonType}
        isLoading={loadingVal}
        type="button"
        textColor={textColor}
        {...rest}
      >
        <ButtonContents isLoading={loadingVal} hasIcon={!!icon}>
          {icon}
          <ButtonText
            isLoading={loadingVal}
            hasIcon={!!icon}
            css={css`
              padding-top: 2px;
            `}
          >
            {children}
          </ButtonText>
        </ButtonContents>
        <Loader
          isLoading={loadingVal}
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
export default withDeprecationWarning(Button, deprecatedProperties);
