import PaymentIconPrimary from './svgs/payment-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(PaymentIconPrimary, PaymentIconPrimary, props);
