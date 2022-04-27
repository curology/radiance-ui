import React from 'react';
import { render } from 'src/tests/testingLibraryHelpers';
import { assert } from 'src/utils/assert';

import { LinkButton } from './index';

describe('<LinkButton/>', () => {
  describe('UI snapshots', () => {
    it('renders with props', () => {
      const { container } = render(
        <LinkButton onClick={() => undefined} href="#">
          Click me!
        </LinkButton>,
      );

      expect(container.firstElementChild).toMatchSnapshot();
    });
  });

  describe('href handling', () => {
    it('should link to a path', () => {
      const href = '/some/path';

      const { getByRole } = render(<LinkButton href={href}>text</LinkButton>);

      const anchorLink = getByRole('link') as HTMLAnchorElement;

      // Covers domain, e.g. http://localhost:8000/some/path
      expect(anchorLink.href.includes(href)).toBeTruthy();
    });
  });

  describe('onClick callback', () => {
    it('should be invoked onClick', async () => {
      const spy = jest.fn();

      const { container, user } = render(
        <LinkButton onClick={spy}>text</LinkButton>,
      );

      assert(container.firstElementChild);
      await user.click(container.firstElementChild);

      expect(spy).toHaveBeenCalled();
    });

    it('should not be invoked if disabled', async () => {
      const spy = jest.fn();

      const { container, user } = render(
        <LinkButton disabled href="#" onClick={spy}>
          text
        </LinkButton>,
      );

      assert(container.firstElementChild);
      await user.click(container.firstElementChild);

      expect(spy).not.toHaveBeenCalled();
    });
  });
});
