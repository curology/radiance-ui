import React from 'react';
import PropTypes from 'prop-types';

import Style from './style';
import { CheckmarkIcon } from '../../icons';
import { isDefined } from '../../utils/isDefined';
import { BORDER_RADIUS_PROP_TYPES, ThemeType } from '../../constants';

const DEFAULT_BORDER_RADIUS = 'small';

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
  image?: string;
  [key: string]: unknown;
}

export interface OptionButtonNotClickableProps
  extends Pick<
    OptionButtonProps,
    'borderRadius' | 'icon' | 'optionType' | 'subtext' | 'text' | 'image'
  > {
  icon: JSX.Element;
}

export type OptionButtonContentProps = Pick<
  OptionButtonProps,
  'buttonType' | 'icon' | 'optionType' | 'selected' | 'subtext' | 'text' | 'image'
>;

export type OptionButtonButtonProps = Pick<
  OptionButtonProps,
  'buttonType' | 'icon' | 'optionType' | 'selected'
>;

export const OptionButtonButton: React.FC<OptionButtonButtonProps> = ({
  buttonType = 'primary',
  icon,
  optionType,
  selected = false,
}) => {
  if (isDefined(icon) && icon !== false) {
    return (
      <Style.IconWrapper
        selected={selected}
        optionType={optionType}
        buttonType={buttonType}
      >
        {selected ? <CheckmarkIcon /> : icon}
      </Style.IconWrapper>
    );
  }

  return (
    <Style.CheckmarkWrapper
        selected={selected}
        optionType={optionType}
        buttonType={buttonType}
      >
        <CheckmarkIcon />
      </Style.CheckmarkWrapper>
  )
};


const OptionButtonContent: React.FC<OptionButtonContentProps> = ({
  buttonType = 'primary',
  icon,
  optionType,
  selected = false,
  subtext,
  text,
  image = '',
}) => (
  <Style.FlexContainer>
    {/**
     * We sometimes use && conditionals such that we are passing in `false` as a value
     */}
    {!!image ? (
      <Style.ImageContainer image={image}>
        <OptionButtonButton
        selected={selected}
        optionType={optionType}
        buttonType={buttonType}
        icon={icon}
      />
      </Style.ImageContainer>
    ) : (
      <OptionButtonButton
        selected={selected}
        optionType={optionType}
        buttonType={buttonType}
        icon={icon}
      />
    )}
    <Style.TextContainer>
      <Style.Text bold={!!image}>{text}</Style.Text>
      {isDefined(subtext) && <Style.SubText>{subtext}</Style.SubText>}
    </Style.TextContainer>
  </Style.FlexContainer>
);

interface OptionButton extends React.FC<OptionButtonProps> {
  NotClickable: typeof OptionButtonNotClickable;
}

/**
 * The `OptionButton` is used within a focused flow (such as the signup page)
 * to provide more context and attention to each selection option.
 *
 * There is also an OptionButton.Container sub-component to be used when we
 * want to use the OptionButton as a purely presentational component rather
 * than a functional button associated with form inputs
 */
export const OptionButton: OptionButton = ({
  borderRadius = DEFAULT_BORDER_RADIUS,
  buttonType,
  icon,
  onClick,
  optionType,
  selected,
  subtext,
  text,
  image = '',
  ...rest
}) => (
  <Style.ClickableContainer
    borderRadius={borderRadius}
    onClick={onClick}
    type="button"
    role={optionType}
    aria-checked={selected}
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
      image={image}
    />
  </Style.ClickableContainer>
);

/**
 * A presentational component to match the display of an OptionButton with an icon
 */
export const OptionButtonNotClickable: React.FC<
  OptionButtonNotClickableProps
> = ({
  borderRadius = DEFAULT_BORDER_RADIUS,
  icon,
  optionType,
  subtext,
  text,
  image = '',
  ...rest
}) => (
  <Style.DisplayContainer
    borderRadius={borderRadius}
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
      image={image}
    />
  </Style.DisplayContainer>
);

/**
 * Similar OptionButton styling without click elements
 */
OptionButton.NotClickable = OptionButtonNotClickable;

OptionButton.propTypes = {
  borderRadius: BORDER_RADIUS_PROP_TYPES,
  buttonType: PropTypes.oneOf(['primary', 'secondary']),
  icon: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  optionType: PropTypes.oneOf(['radio', 'checkbox'] as const).isRequired,
  selected: PropTypes.bool,
  subtext: PropTypes.node,
  text: PropTypes.string.isRequired,
  image: PropTypes.string,
};
