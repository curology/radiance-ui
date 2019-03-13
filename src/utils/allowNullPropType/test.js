import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';

import allowNullPropType from './index';

const Test = ({ text }) => <p>{text || 'Some text'}</p>;

Test.propTypes = {
  text: allowNullPropType(PropTypes.string.isRequired),
};

/* eslint-disable no-console */

describe('allowNullPropType', () => {
  it('raises an error if no prop is passed in', () => {
    console.error = jest.fn();
    shallow(<Test />);

    expect(console.error).toHaveBeenCalled();
  });
  
  it('does not raise error with null prop', () => {
    console.error = jest.fn();
    shallow(<Test text={null} />);
    
    expect(console.error).not.toHaveBeenCalled();
  });
  
  it('does not raise error with normal prop', () => {
    console.error = jest.fn();
    shallow(<Test text='Sample text!' />);

    expect(console.error).not.toHaveBeenCalled();
  })
});

/* eslint-enable no-console */