# CHANGELOG

## v2.0.13
- Add Carousel component ([PR #79](https://github.com/PocketDerm/radiance-ui/pull/79))

## v2.0.12
- Add Tooltip component ([PR #77](https://github.com/PocketDerm/radiance-ui/pull/77))

## v2.0.11
- Add rest to Alert component ([PR #76](https://github.com/PocketDerm/radiance-ui/pull/76))
- Add Textbutton component ([PR #75](https://github.com/PocketDerm/radiance-ui/pull/75))
- Update modal padding ([PR #74](https://github.com/PocketDerm/radiance-ui/pull/74))

## v2.0.10
- Add LinkButton component ([PR #71](https://github.com/PocketDerm/radiance-ui/pull/71))

## v2.0.9
- Added clarifications to storybook on icon display behavior.

## v2.0.8
- Added icon support and multiple sizes to selector button components. ([PR #70](https://github.com/PocketDerm/radiance-ui/pull/70))

## v2.0.7
- Add Dropdown component. ([PR #61](https://github.com/PocketDerm/radiance-ui/pull/61))

## v2.0.6
- Add new Banner component. ([PR #49](https://github.com/PocketDerm/radiance-ui/pull/49))
- Modified ImmersiveModal to take width param ([PR #66](https://github.com/PocketDerm/radiance-ui/pull/66))
- Added new Glyphs
    *  equals-icon ([PR #58](https://github.com/PocketDerm/radiance-ui/pull/58))
    *  spaceship-glyph ([PR #56](https://github.com/PocketDerm/radiance-ui/pull/56))
    *  mild-acne-emoji ([PR #63](https://github.com/PocketDerm/radiance-ui/pull/63))
    *  severe-acne-emoji ([PR #65](https://github.com/PocketDerm/radiance-ui/pull/65))
    *  minus-icon ([PR #55](https://github.com/PocketDerm/radiance-ui/pull/55))
    *  course-glyph ([PR #57](https://github.com/PocketDerm/radiance-ui/pull/57))
- fix body style for emotion 10 : ([PR #54](https://github.com/PocketDerm/radiance-ui/pull/54))

## v2.0.5
- Add new Treatment page glyphs. ([PR #60](https://github.com/PocketDerm/radiance-ui/pull/60))

## v2.0.4
- Fix icons for Emotion 10 and a few other upgrade items. ([PR #51](https://github.com/PocketDerm/radiance-ui/pull/51))

## v2.0.3
- Add LoadingSpinner component ([PR #53](https://github.com/PocketDerm/radiance-ui/pull/53))

## v2.0.2
- Add clipboard icon ([PR #48](https://github.com/PocketDerm/radiance-ui/pull/48))

## v2.0.1
- Bug fix for Gatsby compatibility ([PR #46](https://github.com/PocketDerm/radiance-ui/pull/46))

## v2.0.0
- Updated to Emotion 10. ([PR #41](https://github.com/PocketDerm/radiance-ui/pull/41))

## v1.0.20
- Added `Modal` and `ImmersiveModal` to component library. ([PR #39](https://github.com/PocketDerm/radiance-ui/pull/39))

## v1.0.19
- Fixing a console warning about `tabindex`. Changed to `tabIndex` ([PR #37](https://github.com/PocketDerm/radiance-ui/pull/37))

## v1.0.18
- Added `textColor` prop to Button and RoundButton ([PR #36](https://github.com/PocketDerm/radiance-ui/pull/36))
- Bug fix in dot notation of Accordion subcomponents ([PR #36](https://github.com/PocketDerm/radiance-ui/pull/36))

## v1.0.17
- Added Checkbox to component library ([PR #35](https://github.com/PocketDerm/radiance-ui/pull/35))
- Refactored the Radio component ([PR #35](https://github.com/PocketDerm/radiance-ui/pull/35))

## v1.0.16
- Added Accordion to component library ([PR #32](https://github.com/PocketDerm/radiance-ui/pull/32))

## v1.0.15
- Hotfix Radio Button styling ([PR #31](https://github.com/PocketDerm/radiance-ui/pull/31))

## v1.0.14
- Add `<Container />` component + story ([PR #28](https://github.com/PocketDerm/radiance-ui/pull/28))
- Add `<Chip />` component + story ([PR #27](https://github.com/PocketDerm/radiance-ui/pull/27))

## v1.0.13
- Add `<RadioButton />` component + story ([PR #26](https://github.com/PocketDerm/radiance-ui/pull/26))
- Fixes an issue with `<Alert />` where it was calling exit multiple times ([PR #25](https://github.com/PocketDerm/radiance-ui/pull/25))

## v1.0.12
- Fix bundle to handle components with icons ([PR #24](https://github.com/PocketDerm/radiance-ui/pull/24))

## v1.0.11
- Create alternate naming for LogoCIcon ([PR #23](https://github.com/PocketDerm/radiance-ui/pull/23))
- Add deprecation notice on LogoCIcon ([PR #23](https://github.com/PocketDerm/radiance-ui/pull/23))

## v1.0.10
- Same code as v1.0.9. Forgot to pull down before building the
  bundles...

## v1.0.9
- Add 2 new glyph icons ([PR #22](https://github.com/PocketDerm/radiance-ui/pull/22))
- Add transformation transition to icons ([PR #21](https://github.com/PocketDerm/radiance-ui/pull/21))

## v1.0.8
- Deprecate `Icon` component since it never worked in the first place.
- ([PR #13](https://github.com/PocketDerm/radiance-ui/pull/13)) Introduce new inline icon with SVGR.
- Add all icons, [emojis](https://github.com/PocketDerm/radiance-ui/pull/19), and [glyphs](https://github.com/PocketDerm/radiance-ui/pull/20) to new inline icon set.

## v1.0.7
- Change main bundle to cjs format. But also add a UMD specific bundle
  separately.
- Update depedencies in `package.json`

## v1.0.6
- ([PR #4](https://github.com/PocketDerm/radiance-ui/pull/4)) Add new
  Icon component and add stories
- ([PR #4](https://github.com/PocketDerm/radiance-ui/pull/4)) Add Enzyme
  library for future component testing

## v1.0.5
- ([PR #1](https://github.com/PocketDerm/radiance-ui/pull/1)) Add stories for constants & colors
- ([PR #2](https://github.com/PocketDerm/radiance-ui/pull/2)) Add deprecation warning for the following Typography components:
  - `ErrorText`
  - `SuccessText`
  - `ButtonText`
  - `LinkTag`
- ([PR #2](https://github.com/PocketDerm/radiance-ui/pull/2)) Add new Typography components to replace future deprecation
  - `Error`
  - `Success`
  - `Button`
  - `Link`
- ([PR #3](https://github.com/PocketDerm/radiance-ui/pull/3)) Add `BREAKPOINTS` as a top level constant
