import TreatmentPlanIconPrimary from './svgs/treatment-plan-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const TreatmentPlanIcon = (props: IconProps) =>
  useIcon(TreatmentPlanIconPrimary, TreatmentPlanIconPrimary, props);
