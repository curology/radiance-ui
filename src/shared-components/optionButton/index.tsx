import React from 'react';
import PropTypes from 'prop-types';

import Style from './style';
import { CheckmarkIcon } from '../../icons';
import { isDefined } from '../../utils/isDefined';
import type { ThemeType } from '../../constants';

export interface OptionButtonProps {
  borderRadius?: keyof ThemeType['BORDER_RADIUS'];
  buttonType?: 'primary' | 'secondary';
  /**
   * Show custom icon in the unselected state
   */
  icon?: React.ReactNode;
  onClick: () => void;
  optionType: 'radio' | 'checkbox';
  selected?: boolean;
  subtext?: React.ReactNode;
  text: string;
  [key: string]: unknown;
}

export interface OptionButtonNotClickableProps
  extends Pick<
    OptionButtonProps,
    'borderRadius' | 'icon' | 'optionType' | 'subtext' | 'text'
  > {
  icon: JSX.Element;
}

export type OptionButtonContentProps = Pick<
  OptionButtonProps,
  'buttonType' | 'icon' | 'optionType' | 'selected' | 'subtext' | 'text'
>;

const OptionButtonContent = ({
  buttonType = 'primary',
  icon,
  optionType,
  selected = false,
  subtext,
  text,
}: OptionButtonContentProps) => (
  <Style.FlexContainer>
    {/**
     * We sometimes use && conditionals such that we are passing in `false` as a value
     */}
    {isDefined(icon) && icon !== false ? (
      <Style.IconWrapper
        selected={selected}
        optionType={optionType}
        buttonType={buttonType}
      >
        {selected ? <CheckmarkIcon /> : icon}
      </Style.IconWrapper>
    ) : (
      <Style.CheckmarkWrapper
        selected={selected}
        optionType={optionType}
        buttonType={buttonType}
      >
        <CheckmarkIcon />
      </Style.CheckmarkWrapper>
    )}
    <Style.TextContainer>
      <Style.Text>{text}</Style.Text>
      {isDefined(subtext) && <Style.SubText>{subtext}</Style.SubText>}
    </Style.TextContainer>
  </Style.FlexContainer>
);

/**
 * The `OptionButton` is used within a focused flow (such as the signup page)
 * to provide more context and attention to each selection option.
 *
 * There is also an OptionButton.Container sub-component to be used when we
 * want to use the OptionButton as a purely presentational component rather
 * than a functional button associated with form inputs
 */
export const OptionButton = ({
  borderRadius,
  buttonType,
  icon,
  onClick,
  optionType,
  selected,
  subtext,
  text,
  ...rest
}: OptionButtonProps) => (
  <Style.ClickableContainer
    borderRadius={borderRadius}
    onClick={onClick}
    type="button"
    role={optionType}
    containerType="clickable"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
  >
    <OptionButtonContent
      buttonType={buttonType}
      icon={icon}
      optionType={optionType}
      selected={selected}
      subtext={subtext}
      text={text}
    />
  </Style.ClickableContainer>
);

/**
 * A presentational component to match the display of an OptionButton with an icon
 */
export const OptionButtonNotClickable = ({
  icon,
  optionType,
  subtext,
  text,
  ...rest
}: OptionButtonNotClickableProps) => (
  <Style.DisplayContainer
    containerType="none"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
  >
    <OptionButtonContent
      // The buttonType does not matter for this component
      buttonType="primary"
      icon={icon}
      optionType={optionType}
      selected={false}
      subtext={subtext}
      text={text}
    />
  </Style.DisplayContainer>
);

/**
 * Similar OptionButton styling without click elements
 */
OptionButton.NotClickable = OptionButtonNotClickable;

OptionButton.propTypes = {
  borderRadius: PropTypes.string,
  buttonType: PropTypes.oneOf(['primary', 'secondary']),
  icon: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  optionType: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
  selected: PropTypes.bool,
  subtext: PropTypes.node,
  text: PropTypes.string.isRequired,
};
