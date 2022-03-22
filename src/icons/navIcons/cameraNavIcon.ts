import { CameraNavIcon, CameraNavIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(CameraNavIcon, CameraNavIconSecondary, props);
