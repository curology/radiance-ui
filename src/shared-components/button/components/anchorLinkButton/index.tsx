import React from 'react';
import PropTypes from 'prop-types';

import Style from './style';

export interface AnchorLinkButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /**
   * Text to be displayed
   */
  children: string;
  onClick: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
}

type ButtonRefType =
  | string
  | ((instance: HTMLButtonElement | null) => void)
  | React.RefObject<HTMLButtonElement>
  | null
  | undefined;

/**
 * `AnchorLinkButton` will render an "anchor-link-like" button for triggering changes to the page, typically initiating modals.
 *
 * It should not be used for navigation: see `LinkButton` documentation for navigation functionality.
 *
 * It is the only "Button" that does not extend the functionality/styling of our base Button component.
 */
export const AnchorLinkButton: React.ForwardRefExoticComponent<
  AnchorLinkButtonProps & React.RefAttributes<HTMLButtonElement>
> = React.forwardRef((props: AnchorLinkButtonProps, ref: ButtonRefType) => {
  const { children, onClick, ...rest } = props;

  return (
    <button
      {...rest}
      ref={ref}
      css={Style.anchorLinkButton}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
});

AnchorLinkButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
