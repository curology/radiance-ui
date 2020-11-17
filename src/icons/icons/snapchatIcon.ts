import SnapshotIconPrimary from './svgs/snapshot-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const SnapshotIcon = (props: IconProps) =>
  useIcon(SnapshotIconPrimary, SnapshotIconPrimary, props);
