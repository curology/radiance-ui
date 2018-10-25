import { injectGlobal } from 'react-emotion';

import { resetStyles, brandStyles } from './style';

export default function() {
  injectGlobal(resetStyles);
  injectGlobal(brandStyles);
}
