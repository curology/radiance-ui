import { ArrowLeftIcon, ArrowLeftIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(ArrowLeftIcon, ArrowLeftIconSecondary, props);
