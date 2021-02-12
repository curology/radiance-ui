import React from 'react';
import PropTypes from 'prop-types';

import Style from './style';

export interface AnchorLinkButtonProps {
  /**
   * Text to be displayed
   */
  children: string;
  onClick: () => void;
}

type ButtonRefType =
  | string
  | ((instance: HTMLButtonElement | null) => void)
  | React.RefObject<HTMLButtonElement>
  | null
  | undefined;

/**
 * `AnchorLinkButton` will render an `anchor-link-like' button for triggering changes to the page, typically initiating modals.
 *
 * It should not be used for navigation: see `LinkButton` documentation for navigation functionality.
 *
 * It is the only "Button" that does not extend the functionality/styling of our base Button component.
 */
const AnchorLinkButton = (props: AnchorLinkButtonProps, ref: ButtonRefType) => {
  const { children, onClick } = props;

  return (
    <button
      ref={ref}
      css={Style.anchorLinkButton}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

const AnchorLinkButtonWithRef = React.forwardRef(AnchorLinkButton);

AnchorLinkButtonWithRef.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { AnchorLinkButtonWithRef as AnchorLinkButton };
