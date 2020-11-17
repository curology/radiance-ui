import PaymentIconPrimary from './svgs/payment-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const PaymentIcon = (props: IconProps) =>
  useIcon(PaymentIconPrimary, PaymentIconPrimary, props);
