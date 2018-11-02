import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'src/shared-components';

import {
  Icons,
  IconContainer,
  IconLabel,
} from './style';

const IconList = ({ icons }) => {
  if (!icons || !icons.length) {
    return <div> Loading Icons... </div>;
  }

  return (
    <Icons>
      {icons.map(icon => (
        <IconContainer key={icon}>
          <Icon iconName={icon} width={25} height={25} />
          <IconLabel>{icon}</IconLabel>
        </IconContainer>
      ))}
    </Icons>
  );
};

IconList.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.string),
};

IconList.defaultProps = {
  icons: [],
};

export default IconList;
