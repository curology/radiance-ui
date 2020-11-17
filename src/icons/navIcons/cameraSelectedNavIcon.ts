import CameraSelectedNavIconPrimary from './svgs/camera-selected-nav-icon.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const CameraSelectedNavIcon = (props: IconProps) =>
  useIcon(CameraSelectedNavIconPrimary, CameraSelectedNavIconPrimary, props);
