import PropTypes from 'prop-types';

import {
  Container,
  Section,
  Divider,
  Image, VerticalDivider,
} from './style';

Container.Section = Section;
Container.Divider = Divider;
Container.VerticalDivider = VerticalDivider;
Container.Image = Image;

Container.propTypes = {
  type: PropTypes.oneOf(['message', 'clickable']),
};

export default Container;
