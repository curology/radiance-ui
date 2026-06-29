// Secondary Logo and Wordmark are identical
import { LogoSecondary, LogoSecondaryRebrand, WordmarkPrimary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(WordmarkPrimary, LogoSecondary, props, LogoSecondaryRebrand);
