import styled from '@emotion/styled';

import { COLORS } from '../../constants';

const SIZES = {
  small: 32,
  medium: 48,
  large: 80,
};

const determineSize = ({
  avatarSize,
}: {
  avatarSize: 'small' | 'medium' | 'large';
}) => `
  height: ${SIZES[avatarSize]}px;
  width: ${SIZES[avatarSize]}px;
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
