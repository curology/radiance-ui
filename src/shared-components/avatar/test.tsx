import React from 'react';
import renderer from 'react-test-renderer';
import { decorateWithThemeProvider } from 'src/tests/decorateWithThemeProvider';

import { Avatar } from '.';

describe('<Avatar />', () => {
  const imageExample =
    'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';

  const DecoratedAvatar = decorateWithThemeProvider(Avatar);

  describe('UI snapshot', () => {
    it('renders the component with default props', () => {
      const component = renderer.create(
        <DecoratedAvatar src={imageExample} alt="avatar" />,
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('render with size medium styles', () => {
      const component = renderer.create(
        <DecoratedAvatar size="medium" src={imageExample} alt="avatar" />,
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('render with size large styles', () => {
      const component = renderer.create(
        <DecoratedAvatar size="large" src={imageExample} alt="avatar" />,
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
