import styled from '@emotion/styled';
import { BOX_SHADOWS, BREAKPOINTS, COLORS } from 'src/constants';

const Container = styled.div<{ borderRadius?: string }>`
  border-radius: ${({ borderRadius }) => borderRadius || 'inherit'};
  box-shadow: ${BOX_SHADOWS.boxShadow4};
  background-color: ${COLORS.white};
  max-width: ${BREAKPOINTS.md}px;
`;

export default { Container };
