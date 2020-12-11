import { DownloadIcon, DownloadIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(DownloadIcon, DownloadIconSecondary, props);
