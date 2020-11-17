import UploadIconPrimary from './svgs/upload-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(UploadIconPrimary, UploadIconPrimary, props);
