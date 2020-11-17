import PlanIconPrimary from './svgs/plan-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(PlanIconPrimary, PlanIconPrimary, props);
