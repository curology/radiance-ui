import styled from '@emotion/styled';

import { style as TYPOGRAPHY_STYLE } from '../typography';

export const ErrorList = styled.ul`
  list-style-type: none;
  margin: 0;
  min-height: 23px;
`;

export const CenteredErrorList = styled(ErrorList)`
  text-align: center;
`;

export const ErrorItem = styled.li`
  ${TYPOGRAPHY_STYLE.error};
`;
