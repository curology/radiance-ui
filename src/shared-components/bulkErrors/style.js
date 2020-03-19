import styled from '@emotion/styled';

import { style as TYPOGRAPHY_STYLE } from '../typography';
import { SPACER } from '../../constants';

export const ErrorList = styled.ul`
  list-style-type: none;
  margin: ${SPACER.x2small} 0 0 0;
`;

export const CenteredErrorList = styled(ErrorList)`
  text-align: center;
`;

export const ErrorItem = styled.li`
  ${TYPOGRAPHY_STYLE.error};
  line-height: 24px;
`;
