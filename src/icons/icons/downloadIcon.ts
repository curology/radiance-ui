import DownloadIconPrimary from './svgs/download-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const DownloadIcon = (props: IconProps) =>
  useIcon(DownloadIconPrimary, DownloadIconPrimary, props);
