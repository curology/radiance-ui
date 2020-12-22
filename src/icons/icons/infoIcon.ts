import { InfoIcon, InfoIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(InfoIcon, InfoIconSecondary, props);
