import React from 'react';
import PropTypes from 'prop-types';

import Container from '../container';
import { FlexContainer, Text, IconWrapper, CheckmarkWrapper } from './style';
import CheckmarkIcon from '../../svgs/icons/checkmark-icon.svg';

const OptionButton = ({
  icon,
  text,
  onClick,
  optionType,
  selected,
  styleType,
}) => (
  <Container type="clickable" onClick={onClick}>
    <Container.Section>
      <FlexContainer>
        {icon ? (
          <IconWrapper
            selected={selected}
            optionType={optionType}
            styleType={styleType}
          >
            {selected ? <CheckmarkIcon width={16} height={16} /> : icon}
          </IconWrapper>
        ) : (
          <CheckmarkWrapper
            selected={selected}
            optionType={optionType}
            styleType={styleType}
          >
            <CheckmarkIcon width={16} height={16} />
          </CheckmarkWrapper>
        )}
        <Text styleType={styleType}>{text}</Text>
      </FlexContainer>
    </Container.Section>
  </Container>
);

OptionButton.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  optionType: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
  selected: PropTypes.bool,
  styleType: PropTypes.oneOf(['primary', 'secondary']),
};

OptionButton.defaultProps = {
  styleType: 'primary',
  selected: false,
};

export default OptionButton;
