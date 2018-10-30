import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 16px;

  flex: 1;
`;

const ColorSample = styled.div`
  height: 25px;
  width: 25px;
  background-color: ${props => props.color};
  border-radius: 99999px;
  border: 1px solid #000;
  overflow: hidden;
`;

const ColorName = styled.div`
  font-size: 12px;
  padding-top: 8px;
`;

const ColorHex = styled.div`
  font-size: 8px;
`;

const Color = ({ colorName, colorHex }) => (
  <ColorContainer>
    <ColorSample color={colorHex} />
    <ColorName>{colorName}</ColorName>
    <ColorHex>{colorHex}</ColorHex>
  </ColorContainer>
);

Color.propTypes = {
  colorName: PropTypes.string.isRequired,
  colorHex: PropTypes.string.isRequired,
};
export default Color;
