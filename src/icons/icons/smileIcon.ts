import SmileIconPrimary from './svgs/smile-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const SmileIcon = (props: IconProps) =>
  useIcon(SmileIconPrimary, SmileIconPrimary, props);
