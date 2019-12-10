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

// TODO: Move <Loader /> to be sibling of <ButtonContents /> for more consistent
// loading animation spacing
class Button extends React.Component {
  static Container = Container;

  static propTypes = {
    buttonType: PropTypes.oneOf([
      'primary',
      'secondary',
      'tertiary',
      'quaternary',
    ]),
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    icon: PropTypes.node,
    isFullWidth: PropTypes.bool,
    isLoading: PropTypes.bool,
    loading: isLoadingPropFunction,
    onClick: PropTypes.func,
    noDesktopFullWidth: PropTypes.bool,
    textColor: PropTypes.string,
  };

  static defaultProps = {
    buttonType: 'primary',
    disabled: false,
    isFullWidth: false,
    isLoading: false,
    noDesktopFullWidth: false,
    onClick() {},
    textColor: '',
  };

  render() {
    const {
      buttonType,
      children,
      disabled,
      icon,
      isFullWidth,
      isLoading,
      loading,
      onClick,
      noDesktopFullWidth,
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
        isFullWidth={isFullWidth}
        noDesktopFullWidth={noDesktopFullWidth}
        {...rest}
      >
        <ButtonContents
          isLoading={loadingVal}
          hasIcon={!!icon}
          isFullWidth={isFullWidth}
        >
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
          isFullWidth={isFullWidth}
        />
      </ButtonBase>
    );
  }
}

export LinkButton from './components/linkButton';
export RoundButton from './components/roundButton';
export TextButton from './components/textButton';
export default withDeprecationWarning(Button, deprecatedProperties);
