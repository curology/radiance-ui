import CameraIconPrimary from './svgs/camera-icon.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(CameraIconPrimary, CameraIconPrimary, props);
