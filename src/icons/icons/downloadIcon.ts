import DownloadIconPrimary from './svgs/download-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(DownloadIconPrimary, DownloadIconPrimary, props);
