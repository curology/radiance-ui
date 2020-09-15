import styled from '@emotion/styled';
import { BOX_SHADOWS, BREAKPOINTS, COLORS } from 'src/constants';

const Container = styled.div`
  box-shadow: ${BOX_SHADOWS.clickable};
  background-color: ${COLORS.white};
  max-width: ${BREAKPOINTS.md}px;
`;

export default { Container };
