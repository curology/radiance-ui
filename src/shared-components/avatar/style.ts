import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { COLORS } from '../../constants';

const SIZES = {
  small: 32,
  medium: 48,
  large: 80,
};

const determineSize = ({
  size = 'small',
}: {
  size?: 'small' | 'medium' | 'large';
}): string => `
  height: ${SIZES[size]}px;
  width: ${SIZES[size]}px;
`;

export const Avatar = styled.img`
  ${determineSize}
  background-color: ${COLORS.secondary};
  border-radius: 50%;
  overflow: hidden;
`;

Avatar.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};
