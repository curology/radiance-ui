import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import VerificationMessages from './index';

describe('<VerificationMessages />', () => {
  describe('UI snapshot', () => {
    it('renders with default props and some messages', () => {
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
        arrayString: ['Must contain 1 number', 'Must contain 1 symbol'],
        arrayJSX: [
          <React.Fragment key="1">
            <strong>1</strong> one
          </React.Fragment>,
          <React.Fragment key="2">
            <strong>2</strong> two
          </React.Fragment>,
        ],
      };

      const component = renderer.create(
        <VerificationMessages messages={messages} />,
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders with non-default props', () => {
      const messages = {
        required: (
          <React.Fragment>
            <strong>Congrats!</strong> Your app was approved
          </React.Fragment>
        ),
      };

      const component = renderer.create(
        <VerificationMessages messages={messages} centered type="success" />,
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
      expect(wrapper.html().indexOf('li') === -1).toBe(true);
    });
  });
});
