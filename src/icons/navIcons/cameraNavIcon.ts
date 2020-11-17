import CameraNavIconPrimary from './svgs/camera-nav-icon.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const CameraNavIcon = (props: IconProps) =>
  useIcon(CameraNavIconPrimary, CameraNavIconPrimary, props);
