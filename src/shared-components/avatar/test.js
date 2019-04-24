import React from 'react';
import renderer from 'react-test-renderer';

import Avatar from './index';

describe('<Avatar />', () => {
  const imageExample =
    'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';

  describe('UI snapshot', () => {
    it('renders the component with default props', () => {
      const component = renderer.create(
        <Avatar src={imageExample} alt="avatar" />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('render with size medium styles', () => {
      const component = renderer.create(
        <Avatar size="medium" src={imageExample} alt="avatar" />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('render with size large styles', () => {
      const component = renderer.create(
        <Avatar size="large" src={imageExample} alt="avatar" />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
