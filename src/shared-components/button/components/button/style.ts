import styled from '@emotion/styled';

import type { BaseButtonStylesTypes } from '../../types';
import { baseButtonStyles } from '../../style';

const ButtonBase = styled.button<Omit<BaseButtonStylesTypes, 'theme'>>`
  ${baseButtonStyles}
`;

export default { ButtonBase };
