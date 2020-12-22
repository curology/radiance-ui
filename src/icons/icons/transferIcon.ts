import { TransferIcon, TransferIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(TransferIcon, TransferIconSecondary, props);
