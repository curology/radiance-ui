import React from 'react';
import PropTypes from 'prop-types';

import { ChevronIcon } from '../../icons';
import { SelectOuterContainer, selectInputStyle, IconContainer } from './style';

const MobileDropdown = ({
  textAlign, value, onSelectChange, options, 
}) => (
  <SelectOuterContainer textAlign={textAlign}>
    <select
      css={selectInputStyle({ textAlign })}
      value={value}
      onChange={onSelectChange}
    >
      {options.map(option => (
        <option
          key={option.value}
          value={option.value}
          disabled={option.disabled}
        >
          {option.label}
        </option>
      ))}
    </select>
    <IconContainer>
      <ChevronIcon width={10} height={10} />
    </IconContainer>
  </SelectOuterContainer>
);

MobileDropdown.defaultProps = {
  value: null,
  options: [{ value: null, label: '' }],
  textAlign: 'left',
  onSelectChange() {},
};

MobileDropdown.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      label: PropTypes.string,
      disabled: PropTypes.bool,
    })
  ),
  textAlign: PropTypes.oneOf(['left', 'center']),
  onSelectChange: PropTypes.func,
};

export default MobileDropdown;
