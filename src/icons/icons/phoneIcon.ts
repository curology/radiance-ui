import PhoneIconPrimary from './svgs/phone-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(PhoneIconPrimary, PhoneIconPrimary, props);
