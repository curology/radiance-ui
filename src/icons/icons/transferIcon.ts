import TransferIconPrimary from './svgs/transfer-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const TransferIcon = (props: IconProps) =>
  useIcon(TransferIconPrimary, TransferIconPrimary, props);
