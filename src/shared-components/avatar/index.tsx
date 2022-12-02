import React from 'react';

import Style from './style';

export interface AvatarProps {
  alt: string;
  size?: 'small' | 'medium' | 'large';
  src: string;
}

export const Avatar: React.FC<AvatarProps> = ({ alt, size = 'small', src }) => (
  <Style.AvatarImage alt={alt} avatarSize={size} src={src} />
);
