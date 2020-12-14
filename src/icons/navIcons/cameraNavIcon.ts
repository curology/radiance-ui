import { CameraNavIcon, CameraNavIconSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(CameraNavIcon, CameraNavIconSecondary, props);
