import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 16px;
`;

const ColorSample = styled.div`
  height: 25px;
  width: 25px;
  background-color: ${(props) => props.color};
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

type ColorProps = {
  colorName: string;
  colorHex: string;
};

const Color = ({ colorName, colorHex }: ColorProps) => (
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
