import PlanIconPrimary from './svgs/plan-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const PlanIcon = (props: IconProps) =>
  useIcon(PlanIconPrimary, PlanIconPrimary, props);
