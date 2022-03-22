import { CameraIcon, CameraIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(CameraIcon, CameraIconSecondary, props);
