import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { SPACER } from 'src/constants';

const ColorContainer = styled.div`
  margin: 0 ${SPACER.x3large} ${SPACER.x3large} 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const ColorSample = styled.div`
  height: 40px;
  width: 40px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

const ColorName = styled.div`
  font-size: 14px;
  padding-top: 8px;
`;

const ColorHex = styled.div`
  font-size: 12px;
`;

interface ColorProps {
  colorHex: string;
  colorName: string;
}

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
