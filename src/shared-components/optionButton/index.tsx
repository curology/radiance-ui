import React from 'react';
import PropTypes from 'prop-types';

import {
  ClickableContainer,
  FlexContainer,
  TextContainer,
  Text,
  SubText,
  IconWrapper,
  CheckmarkWrapper,
} from './style';
import { CheckmarkIcon } from '../../icons';

export interface OptionButtonProps {
  borderRadius?: string;
  buttonType?: 'primary' | 'secondary';
  /**
   * Show custom icon in the unselected state
   */
  icon?: React.ReactNode;
  /**
   * Label
   */
  onClick: () => void;
  optionType: 'radio' | 'checkbox';
  selected?: boolean;
  subtext?: React.ReactNode;
  text: string;
  [key: string]: unknown;
}

export const OptionButton = ({
  borderRadius,
  buttonType = 'primary',
  icon,
  onClick,
  optionType,
  selected = false,
  subtext,
  text,
  ...rest
}: OptionButtonProps) => (
  <ClickableContainer
    borderRadius={borderRadius}
    onClick={onClick}
    type="button"
    role={optionType}
    containerType="clickable"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
  >
    <FlexContainer>
      {icon ? (
        <IconWrapper
          selected={selected}
          optionType={optionType}
          buttonType={buttonType}
        >
          {selected ? <CheckmarkIcon /> : icon}
        </IconWrapper>
      ) : (
        <CheckmarkWrapper
          selected={selected}
          optionType={optionType}
          buttonType={buttonType}
        >
          <CheckmarkIcon />
        </CheckmarkWrapper>
      )}
      <TextContainer>
        <Text>{text}</Text>
        {subtext && <SubText>{subtext}</SubText>}
      </TextContainer>
    </FlexContainer>
  </ClickableContainer>
);

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
