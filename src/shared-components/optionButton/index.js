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
import CheckmarkIcon from '../../svgs/icons/checkmark-icon.svg';

const OptionButton = ({
  icon,
  text,
  onClick,
  optionType,
  selected,
  subtext,
  type,
  ...rest
}) => (
  <ClickableContainer onClick={onClick} type="clickable" tabIndex="0" {...rest}>
    <FlexContainer>
      {icon ? (
        <IconWrapper selected={selected} optionType={optionType} type={type}>
          {selected ? <CheckmarkIcon width={16} height={16} /> : icon}
        </IconWrapper>
      ) : (
        <CheckmarkWrapper
          selected={selected}
          optionType={optionType}
          type={type}
        >
          <CheckmarkIcon width={16} height={16} />
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
  icon: PropTypes.node,
  text: PropTypes.string.isRequired,
  subtext: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  optionType: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
  selected: PropTypes.bool,
  type: PropTypes.oneOf(['primary', 'secondary']),
};

OptionButton.defaultProps = {
  type: 'primary',
  selected: false,
};

export default OptionButton;
