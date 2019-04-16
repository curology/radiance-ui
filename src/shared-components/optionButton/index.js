import React from 'react';
import PropTypes from 'prop-types';

import {
  ClickableContainer,
  FlexContainer,
  Text,
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
  type,
  ...rest
}) => (
  <ClickableContainer onClick={onClick} type="clickable" {...rest}>
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
      <Text type={type}>{text}</Text>
    </FlexContainer>
  </ClickableContainer>
);

OptionButton.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string.isRequired,
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
