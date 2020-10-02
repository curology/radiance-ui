import styled from '@emotion/styled';

import { COLORS } from '../../constants';

const SIZES = {
  small: 32,
  medium: 48,
  large: 80,
};

const determineSize = ({ size }: { size: 'small' | 'medium' | 'large' }) => `
  height: ${SIZES[size]}px;
  width: ${SIZES[size]}px;
`;

const AvatarImage = styled.img`
  ${determineSize}
  background-color: ${COLORS.secondary};
  border-radius: 50%;
  overflow: hidden;
`;

export default {
  AvatarImage,
};
