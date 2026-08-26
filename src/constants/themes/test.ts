import compareObjectsKeysLength from 'src/utils/compareObjectsKeysLength';

import SECONDARY_BORDER_RADIUS from '../borderRadius/secondary';
import SECONDARY_REBRAND_BORDER_RADIUS from '../borderRadius/secondaryRebrand';
import SECONDARY_BOX_SHADOWS from '../boxShadows/secondary';
import SECONDARY_REBRAND_BOX_SHADOWS from '../boxShadows/secondaryRebrand';
import { primaryTheme } from './primaryTheme';
import { secondaryTheme } from './secondaryTheme';
import { secondaryRebrandTheme } from './secondaryRebrandTheme';
import { tertiaryTheme } from './tertiaryTheme';

describe('themes', () => {
  it('all themes have the same number of properties', () => {
    expect(compareObjectsKeysLength(primaryTheme, secondaryTheme)).toBe(true);
    expect(compareObjectsKeysLength(primaryTheme, secondaryRebrandTheme)).toBe(
      true,
    );
    expect(compareObjectsKeysLength(primaryTheme, tertiaryTheme)).toBe(true);
  });
});

/**
 * `secondaryRebrand` began as a functional duplicate of `secondary` (v30.3.0).
 * The Agency rebrand design then introduced rounded corners, a clickable shadow
 * and its own modal shadow colour, none of which legacy Agency had, so the two
 * themes now diverge on four keys. These tests pin that divergence so it stays
 * intentional rather than drifting.
 *
 * Each value is asserted against the design it comes from, never against
 * `secondary`. Pinning a rebrand token to its parent theme is how the wrong
 * modal shadow colour survived: an equality assertion reads as deliberate
 * inheritance whether or not anybody checked it against the design.
 *
 * No component test renders under `secondaryRebrand`, so the component
 * snapshots cannot catch a regression here.
 */
describe('secondaryRebrand theme tokens', () => {
  it('rounds corners where the rebrand design calls for it', () => {
    expect(SECONDARY_REBRAND_BORDER_RADIUS.medium).toBe('8px');
    expect(SECONDARY_REBRAND_BORDER_RADIUS.large).toBe('32px');
  });

  it('gives clickable surfaces a shadow', () => {
    expect(SECONDARY_REBRAND_BOX_SHADOWS.clickable).toBe(
      '0px 8px 24px rgba(52, 51, 82, 0.05)',
    );
  });

  /*
   * The rebrand's modal sheet shadow is `#343352` at 5%, read straight out of
   * the `feColorMatrix` Figma bakes into its own exported sheet asset
   * (`0.203922 / 0.2 / 0.321569`, alpha `.05`). Legacy Agency used a warm
   * `rgba(45, 41, 38, …)`, which the rebrand inherited and nobody revisited.
   */
  it('uses the rebrand modal shadow colour, not the legacy Agency one', () => {
    expect(SECONDARY_REBRAND_BOX_SHADOWS.modal).toBe(
      '0px -8px 24px rgba(52, 51, 82, 0.05)',
    );
  });

  it('keeps the legacy Agency values everywhere the rebrand is silent', () => {
    expect(SECONDARY_REBRAND_BORDER_RADIUS.small).toBe(
      SECONDARY_BORDER_RADIUS.small,
    );
    expect(SECONDARY_REBRAND_BOX_SHADOWS.clickableHover).toBe(
      SECONDARY_BOX_SHADOWS.clickableHover,
    );
  });

  it('diverges from the secondary theme on exactly the intended radii', () => {
    const divergentRadii = Object.keys(SECONDARY_REBRAND_BORDER_RADIUS).filter(
      (key) =>
        SECONDARY_REBRAND_BORDER_RADIUS[
          key as keyof typeof SECONDARY_REBRAND_BORDER_RADIUS
        ] !==
        SECONDARY_BORDER_RADIUS[key as keyof typeof SECONDARY_BORDER_RADIUS],
    );

    expect(divergentRadii).toStrictEqual(['medium', 'large']);
  });

  /*
   * `focus` and `focusInner` interpolate each theme's own COLORS, so they have
   * always differed between these two themes — that predates this change and is
   * unrelated to it. `clickable` and `modal` are the two the rebrand moved.
   */
  it('diverges from the secondary theme on exactly the intended shadows', () => {
    const shadowsDifferingForTheirOwnReasons = ['focus', 'focusInner'];
    const divergentShadows = Object.keys(SECONDARY_REBRAND_BOX_SHADOWS)
      .filter(
        (key) =>
          SECONDARY_REBRAND_BOX_SHADOWS[
            key as keyof typeof SECONDARY_REBRAND_BOX_SHADOWS
          ] !==
          SECONDARY_BOX_SHADOWS[key as keyof typeof SECONDARY_BOX_SHADOWS],
      )
      .filter((key) => !shadowsDifferingForTheirOwnReasons.includes(key));

    expect(divergentShadows).toStrictEqual(['clickable', 'modal']);
  });
});
