import PropTypes from 'prop-types';

import {
  Container,
  Section,
  Divider,
  Image,
} from './style';

Container.Section = Section;
Container.Divider = Divider;
Container.Image = Image;

Container.propTypes = {
  type: PropTypes.oneOf(['message', 'clickable']),
};

export default Container;
