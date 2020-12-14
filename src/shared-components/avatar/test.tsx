import React from 'react';
import { render } from 'src/tests/testingLibraryHelpers';

import { Avatar } from '.';

describe('<Avatar />', () => {
  const imageExample =
    'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';

  describe('UI snapshot', () => {
    it('renders the Avatar with default props', () => {
      const { container } = render(<Avatar src={imageExample} alt="avatar" />);

      expect(container.firstElementChild).toMatchSnapshot();
    });

    it('render with size medium styles', () => {
      const { container } = render(
        <Avatar size="medium" src={imageExample} alt="avatar" />,
      );

      expect(container.firstElementChild).toMatchSnapshot();
    });

    it('render with size large styles', () => {
      const { container } = render(
        <Avatar size="large" src={imageExample} alt="avatar" />,
      );

      expect(container.firstElementChild).toMatchSnapshot();
    });
  });
});
