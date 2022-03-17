import React from 'react';
import PropTypes from 'prop-types';

import Style from './style';

export interface AvatarProps {
  alt: string;
  size?: 'small' | 'medium' | 'large';
  src: string;
}

export const Avatar: React.FC<AvatarProps> = ({ alt, size = 'small', src }) => (
  <Style.AvatarImage
    alt={alt}
    avatarSize={size}
    src={src}
  />
);

Avatar.propTypes = {
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  src: PropTypes.string.isRequired,
};
