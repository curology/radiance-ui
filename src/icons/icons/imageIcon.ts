import ImageIconPrimary from './svgs/image-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const ImageIcon = (props: IconProps) =>
  useIcon(ImageIconPrimary, ImageIconPrimary, props);
