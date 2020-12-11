import { TreatmentPlanIcon, TreatmentPlanIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(TreatmentPlanIcon, TreatmentPlanIconSecondary, props);
