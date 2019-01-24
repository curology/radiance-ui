import React from 'react';
import { shallow } from 'enzyme';

import ImmersiveModal from './index';

const childComponent = <div />;

describe('<ImmersiveModal />', () => {
  describe('ImmersiveModal closure', () => {
    it('invokes the onClose prop', () => {
      const spy = jest.fn();
      const wrapper = shallow(
        <ImmersiveModal onClose={spy}>
          {childComponent}
        </ImmersiveModal>
      );

      wrapper.instance().onOffClick();

      expect(spy).toHaveBeenCalled();
    });
  });
});
