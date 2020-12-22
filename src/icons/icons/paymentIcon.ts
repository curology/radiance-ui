import { PaymentIcon, PaymentIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(PaymentIcon, PaymentIconSecondary, props);
