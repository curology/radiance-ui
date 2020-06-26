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
import { COLORS, COLORS_PROP_TYPES } from '../../constants';
import {
  deprecatedProperties,
  isLoadingPropFunction,
} from './deprecatedPropsHanlder';

export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary'
  | 'action';

type ButtonProps = {
  buttonColor?: string;
  buttonType?: ButtonType;
  children: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
  isFullWidth?: boolean;
  isLoading?: boolean;
  loading?: boolean | undefined;
  onClick?: () => void;
  textColor?: string;
  [key: string]: any;
};

class Button extends React.Component<ButtonProps> {
  static Container = Container;

  static propTypes = {
    buttonColor: COLORS_PROP_TYPES,
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
    textColor: PropTypes.string,
  };

  static defaultProps = {
    buttonColor: COLORS.primary,
    buttonType: 'primary',
    disabled: false,
    icon: null,
    isFullWidth: false,
    isLoading: false,
    loading: undefined,
    onClick: () => undefined,
    textColor: '',
  };

  render() {
    const {
      buttonColor = COLORS.primary,
      buttonType = 'primary',
      children,
      disabled = false,
      icon = null,
      isFullWidth = false,
      isLoading = false,
      loading = undefined,
      onClick = () => undefined,
      textColor = '',
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
          buttonColor={buttonColor}
          buttonType={buttonType}
          disabled={disabled}
          isFullWidth={isFullWidth}
          isLoading={loadingVal}
          textColor={textColor}
        />
      </ButtonBase>
    );
  }
}

export { LinkButton, RoundButton, TextButton };
export default withDeprecationWarning(Button, deprecatedProperties);
