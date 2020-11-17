import NextIconPrimary from './svgs/next-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const NextIcon = (props: IconProps) =>
  useIcon(NextIconPrimary, NextIconPrimary, props);
