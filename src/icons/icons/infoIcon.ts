import InfoIconPrimary from './svgs/info-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(InfoIconPrimary, InfoIconPrimary, props);
