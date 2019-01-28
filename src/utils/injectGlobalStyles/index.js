import { injectGlobal } from 'emotion';

import { resetStyles, brandStyles } from './style';

export default function() {
  injectGlobal(resetStyles);
  injectGlobal(brandStyles);
}
