import { UploadIcon, UploadIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(UploadIcon, UploadIconSecondary, props);
