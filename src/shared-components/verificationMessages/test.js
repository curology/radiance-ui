import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import VerificationMessages from './index';

describe('<VerificationMessages />', () => {
  describe('UI snapshot', () => {
    it('renders content and children', () => {
      const messages = {
        required: (
          <React.Fragment>
            <strong>Uh oh!</strong> This field is required
          </React.Fragment>
        ),
        maxLength: (
          <React.Fragment>
            <strong>Uh oh!</strong> Must be at least 3 characters
          </React.Fragment>
        ),
        charactersRequired: ['Must contain 1 number', 'Must contain 1 symbol'],
      };
      const component = renderer.create(
        <VerificationMessages messages={messages} />,
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('when message value is an empty array', () => {
    it('renders nothing', () => {
      const messages = {
        required: [],
      };
      const wrapper = shallow(<VerificationMessages messages={messages} />);
      console.log(wrapper.debug());
      expect(wrapper.html().indexOf('li') === -1).toBe(true);
    });
  });
});
