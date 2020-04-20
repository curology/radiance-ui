import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import Loader from './shared-components/loader';
import Container from './shared-components/container';
import { ButtonBase, ButtonText, ButtonContents } from './style';
import withDeprecationWarning from '../../utils/withDeprecationWarning';
import LinkButton from './components/linkButton';
import RoundButton from './components/roundButton';
import TextButton from './components/textButton';
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
    buttonColor: PropTypes.oneOf(Object.values(COLORS)),
    loading: isLoadingPropFunction,
    isLoading: PropTypes.bool,
    icon: PropTypes.node,
    textColor: PropTypes.string,
    isFullWidth: PropTypes.bool,
  };

  static defaultProps = {
    disabled: false,
    buttonType: 'primary',
    buttonColor: COLORS.primary,
    loading: undefined,
    isLoading: false,
    icon: null,
    onClick: () => undefined,
    textColor: '',
    isFullWidth: false,
  };

  render() {
    const {
      onClick,
      disabled,
      children,
      buttonType,
      buttonColor,
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
        buttonColor={buttonColor}
        isLoading={loadingVal}
        type="button"
        textColor={textColor}
        isFullWidth={isFullWidth}
        // eslint-disable-next-line react/jsx-props-no-spreading
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
          buttonColor={buttonColor}
          textColor={textColor}
          isFullWidth={isFullWidth}
        />
      </ButtonBase>
    );
  }
}

export { LinkButton, RoundButton, TextButton };
export default withDeprecationWarning(Button, deprecatedProperties);
