import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import Loader from './shared-components/loader';
import Container from './shared-components/container';
import { ButtonBase, ButtonText, ButtonContents } from './style';
import withDeprecationWarning from '../../utils/withDeprecationWarning';
import { COLORS } from '../../constants';

const deprecatedProperties = {
  loading: "The 'loading' prop is deprecated. Use 'isLoading' instead.",
};

const isLoadingPropFunction = (props, propName, componentName) => {
  if (props[propName] !== undefined) {
    return new Error(
      `'loading' prop will be deprecated in a future major release. Please rename 'loading' to 'isLoading' in ${componentName}`,
    );
  }
};

// TODO: Move <Loader /> to be sibling of <ButtonContents /> for more consistent
// loading animation spacing
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
    color: PropTypes.oneOf(Object.keys(COLORS)),
    loading: isLoadingPropFunction,
    isLoading: PropTypes.bool,
    icon: PropTypes.node,
    textColor: PropTypes.string,
    isFullWidth: PropTypes.bool,
  };

  static defaultProps = {
    disabled: false,
    buttonType: 'primary',
    color: 'purple',
    isLoading: false,
    onClick() {},
    textColor: '',
    isFullWidth: false,
  };

  render() {
    const {
      onClick,
      disabled,
      children,
      buttonType,
      color,
      loading,
      isLoading,
      icon,
      textColor,
      isFullWidth,
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
        color={color}
        isLoading={loadingVal}
        type="button"
        textColor={textColor}
        isFullWidth={isFullWidth}
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
          color={color}
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
