# CHANGELOG

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
