import { CameraSelectedNavIcon, CameraSelectedNavIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(CameraSelectedNavIcon, CameraSelectedNavIconSecondary, props);
