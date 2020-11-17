import ErrorIconPrimary from './svgs/error-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const ErrorIcon = (props: IconProps) =>
  useIcon(ErrorIconPrimary, ErrorIconPrimary, props);
