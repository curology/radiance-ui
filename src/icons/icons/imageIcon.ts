import { ImageIcon, ImageIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(ImageIcon, ImageIconSecondary, props);
