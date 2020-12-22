import { PlanIcon, PlanIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(PlanIcon, PlanIconSecondary, props);
