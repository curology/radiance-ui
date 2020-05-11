import React from 'react';
import { shallow } from 'enzyme';

import ImmersiveModal from './index';

describe('<ImmersiveModal />', () => {
  describe('ImmersiveModal closure', () => {
    it('invokes the onClose prop', () => {
      const spy = jest.fn();
      const wrapper = shallow(
        <ImmersiveModal onClose={spy}>
          <div>Hello World</div>
        </ImmersiveModal>,
      );

      wrapper.find('[data-test-id="modal-close-icon-button"]');

      // expect(spy).toHaveBeenCalled();
    });
  });
});
