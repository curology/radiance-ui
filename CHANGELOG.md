# CHANGELOG

# v24.1.0

- [Icons] Add `<MelasmaGlyph />` for secondary theme ([#1080](https://github.com/curology/radiance-ui/pull/1080))

# v24.0.0

- [Internal] **BREAKING CHANGE** Build transpiles with `browserslist` configuration, so some older browsers (e.g. Edge 15-17) are no longer be supported ([#946](https://github.com/curology/radiance-ui/pull/946))

# v23.0.1

- [Internal] Moved built files from `dist` to `lib`. This is neccessary for TypeScript to properly resolve paths like `radiance-ui/lib/constants`, because TypeScript is unable to parse conditional exports ([#1057](https://github.com/curology/radiance-ui/pull/1057))

# v23.0.0

- [Components] Added new `ResetStyles` and `BrandStyles` components to inject global styles. These replace the `utils/injectGlobalStyles/style` exports that were used for the same purpose. ([#1051)](https://github.com/curology/radiance-ui/pull/1051))
- [Internal] **BREAKING CHANGE** It's no longer possible to import files directly. You must use the documented entrypoints instead. This is only a breaking change if you were using undocumented imports ([#1049](https://github.com/curology/radiance-ui/pull/1049))
- [Internal] **BREAKING CHANGE** It's no longer possible to import the un-bundled Babel output from `lib`. Importing `radiance-ui/lib/*` import specifiers will now import native ESM modules produced by Rollup ([#1049](https://github.com/curology/radiance-ui/pull/1049))
- [Bundling] **BREAKING CHANGE** A UMD bundle is no longer provided. In the majority of cases the CJS and ESM formats should be preferred. If necessary you can re-bundle one of the other formats to UMD ([#1041](https://github.com/curology/radiance-ui/pull/1041))
- [Bundling] The Common JS builds now includes all public entrypoints and the modules are no longer bundled into a single file ([#1049](https://github.com/curology/radiance-ui/pull/1049))
- [Bundling] The ESM build now includes all public entrypoints ([#1049](https://github.com/curology/radiance-ui/pull/1049))
- [Dependencies] The `@babel/runtime` package is now required separately instead of the helpers being bundled. This should reduce bundle size in most cases ([#1049](https://github.com/curology/radiance-ui/pull/1049))
- [Dependencies] Bump react-transition-group from 4.4.1 to 4.4.2 ([#997](https://github.com/curology/radiance-ui/pull/997))
- [Dependencies] Bump @react-aria/focus from 3.3.0 to 3.4.0 ([#1024](https://github.com/curology/radiance-ui/pull/1024))

# v22.0.0

- [Dependencies] **BREAKING CHANGE** Upgrade Emotion from 10 to 11 ([#910](https://github.com/curology/radiance-ui/pull/910))
- [TypeScript] Update Component type definitions to prevent `prop-types` errors in consumer applications ([#983](https://github.com/curology/radiance-ui/pull/983))
- [DialogModal] Update `onCloseIconClick` type definition ([#984](https://github.com/curology/radiance-ui/pull/984))
- [Babel] [Emotion] Set `autoLabel: 'always'` to maintain previous Emotion 10 behavior (fixing size regression) ([#1001](https://github.com/curology/radiance-ui/pull/1001))
- [Tooltip] Refactor hover/click style application logic to remove `<Global />` style (deceasing bundle size) ([#1002](https://github.com/curology/radiance-ui/pull/1002))
- [Container] Move `styled` definition used solely for TypeScript type in `./types.ts` file to remove it from bundle output ([#1003](https://github.com/curology/radiance-ui/pull/1003))

# v21.0.0

- [Components] **BREAKING CHANGE** Update `borderRadius` prop in `<Accordion />` and `<OptionButton />` to be theme key rather than values ([#930](https://github.com/curology/radiance-ui/pull/930))

# v20.0.1

- [Hotfix] [#903](https://github.com/curology/radiance-ui/pull/903) follow-up ([#915](https://github.com/curology/radiance-ui/pull/915))

# v20.0.0

- [Components] **BREAKING CHANGE** Update `style` export pattern, breaking existing `radiance-ui/lib/shared-components/**/style` imports in userland ([#903](https://github.com/curology/radiance-ui/pull/903))
- [Components] Add `OptionButton.NotClickable` presentation component ([#905](https://github.com/curology/radiance-ui/pull/905))

# v19.1.0

- [Bugfix] Handle `false` icon props for logic like `<OptionButton icon={Icon && <Icon />} />` ([#900](https://github.com/curology/radiance-ui/pull/900))
- [Typography] Add `Body Bold` style and component (`Typography.Bold`) ([#884](https://github.com/curology/radiance-ui/pull/884))

# v19.0.1

- [TypeScript] Update library exports to export TypeScript types ([#894](https://github.com/curology/radiance-ui/pull/894))

# v19.0.0

- [Components] **BREAKING CHANGE** Update `<Callout />` API, removing `color` prop and adding new `error` type ([#878](https://github.com/curology/radiance-ui/pull/878))
- [Components] **BREAKING CHANGE** Update `<Chip />` API, add Low Contrast variations, and remove `secondary` type, and make `primary` type default ([#883](https://github.com/curology/radiance-ui/pull/883))
- [Components] **BREAKING CHANGE** Update `<Indicator />` API, remove `backgroundColor` prop, add `type` presets ([#885](https://github.com/curology/radiance-ui/pull/885))

# v18.2.0

- [Icons] Add Secondary Logo ([#879](https://github.com/curology/radiance-ui/pull/879))

# v18.1.0

- [Modals] Change overlay color in `DialogModal` and `ImmersiveModal` ([#846](https://github.com/curology/radiance-ui/pull/846))

# v18.0.0

- [Modals] **BREAKING CHANGE**: Remove custom styling to `DialogModal` and `ImmersiveModal` paragraph tags in modals body, added as subcomponent as an alternative ([#833](https://github.com/curology/radiance-ui/pull/833))

# v17.2.3

- [Icons] Add KojiAcidGlyph ([#818](https://github.com/curology/radiance-ui/pull/818))

# v17.2.2

- [Icons] Add DesonideGlyph, MetronidazoleGlyph and TranexamicAcidGlyph ([#815](https://github.com/curology/radiance-ui/pull/815))

# v17.2.1

- [Components] Add media query to DialogModal for smaller devices ([#779](https://github.com/curology/radiance-ui/pull/779))

# v17.2.0

- [Icons] Add SunMoonGlyph and SunMoonGlyphSecondary ([#801](https://github.com/curology/radiance-ui/pull/801))

# v17.1.0

- [Icons] Add DexpanthenolGlyphSecondary, GreenTeaGlyphSecondary, KojicAcidGlyphSecondary, ResveratrolGlyphSecondary ([#800](https://github.com/curology/radiance-ui/pull/800))

# v17.0.1

- [Dependencies] Remove errantly added @storybook packages from dependencies ([#799](https://github.com/curology/radiance-ui/pull/799))

# v17.0.0

- [Theme] **BREAKING CHANGE**: Require `theme` argument to `TYPOGRAPHY_STYLE.link` ([#778](https://github.com/curology/radiance-ui/pull/778))
- [Components] Add AnchorLinkButton ([#778](https://github.com/curology/radiance-ui/pull/778))
- [Components] Add `'success'` Callout type ([#780](https://github.com/curology/radiance-ui/pull/780))
- [Bugfix] Correct never-ending while loop in Alert ([#797](https://github.com/curology/radiance-ui/pull/797/files#diff-cd9d43540e34235173ce0796f0c9cec08f2a2335b2659523e48ac3d44ea28b55))
- [Internal] Add Chromatic support for Secondary Theme ([#797](https://github.com/curology/radiance-ui/pull/797))

# v16.8.0

- [Icons] Add BreakGlyph, CycleGlyph, CycleGlyphSecondary, FormulaChangeGlyph, HydrocortisoneGlyph, HydrocortisoneGlyphSecondary, HydroquinoneGlyph, LightbulbGlyph, MoonGlyph, MoonGlyphSecondary ([#777](https://github.com/curology/radiance-ui/pull/777))

# v16.7.1

- [Icons] Fix CalendarIconSecondary ([#772](https://github.com/curology/radiance-ui/pull/772))

# v16.7.0

- Add `backgroundColor` prop to `DialogModal` component [#767](https://github.com/curology/radiance-ui/pull/767)

# v16.6.2

- [Theming] Export `applyPrimaryThemeVerticalOffset` to be used in consumer apps

# v16.6.1

- [Theming] Create the util function `applyPrimaryThemeVerticalOffset` apply it to `Chip` and `Indicator` component [#720](https://github.com/curology/radiance-ui/pull/720)

# v16.5.1

- [Theming] Revert label `line-height` changes made in [#704](https://github.com/curology/radiance-ui/pull/704) ([#726](https://github.com/curology/radiance-ui/pull/726))

# v16.5.0

- Update `background-color` theme of `AvatarImage` from `secondary` to `secondaryTint1` ([#734](https://github.com/curology/radiance-ui/pull/734))

# v16.4.0

- Add `backgroundColor` prop to Indicator and change component `border-radius` to `50%` ([#718](https://github.com/curology/radiance-ui/pull/718))

# v16.2.2

- [Theming] Set Secondary Theme `line-height` value across usage to `1.4` ([#704](https://github.com/curology/radiance-ui/pull/704))
- [Theming] Set Secondary Theme heading elements (Display/h1, Heading/h2, Title/h3) `font-weight` to `400` ([#704](https://github.com/curology/radiance-ui/pull/704))

# v16.2.1

- [Icons] Fix TruckIconSecondary ([#681](https://github.com/curology/radiance-ui/pull/681))
- [Internal] Add Bundlewatch to replace .size-snapshot.json to track size regressions ([#667](https://github.com/curology/radiance-ui/pull/667))
- [Internal] Remove extra `emotion` css functions to reduce bundle sie ([#666](https://github.com/curology/radiance-ui/pull/666))
- [Internal] Replace `Enzyme` and `React Test Renderer` with `React Testing Library` ([#609](https://github.com/curology/radiance-ui/pull/609))

# v16.2.0

- [Theming] Change primary button styles for secondary theme ([#651](https://github.com/curology/radiance-ui/pull/651))
- [Theming] Modify AcneGlyphSecondary ([#652](https://github.com/curology/radiance-ui/pull/652))

# v16.1.0

- [Theming] Adds theming logic for border radius. Changed Container type message border radius from 16px to 8px ([#642](https://github.com/curology/radiance-ui/pull/642))

# v16.0.0

- [Icons] **BREAKING CHANGE**: Renames a number of icon components:
  - `Arrow` --> `ArrowIcon`
  - `TimeAlwaysGlyph` --> `ClockAlwaysGlyph`
  - `TimeMostOfTheTimeGlyph` --> `ClockMostOfTheTimeGlyph`
  - `TimeSometimesGlyph` --> `ClockSometimesGlyph`
  - `TimeNeverGlyph` --> `ClockNeverGlyph`
  - `CalendarAlwaysGlyph` --> `TimeAlwaysGlyph`
  - `CalendarMostOfTheTimeGlyph` --> `TimeMostOfTheTimeGlyph`
  - `CalendarSometimesGlyph` --> `TimeSometimesGlyph`
  - `CalendarNeverGlyph` --> `TimeNeverGlyph`
  - `MildAcneEmoji` --> `MildIrritationEmoji`
  - `MildAcneSelectedEmoji` --> `MildIrritationSelectedEmoji`
  - `NoticeableAcneEmoji` --> `NoticeableIrritationEmoji`
  - `NoticeableAcneSelectedEmoji` --> `NoticeableIrritationSelectedEmoji`
  - `SevereAcneEmoji` --> `SevereIrritationEmoji`
  - `SevereAcneSelectedEmoji` --> `SevereIrritationSelectedEmoji`
- [Icons] **BREAKING CHANGE** Removes `height` and `width` default values of `16`, default values now supplied by `svg` files according to type (`16x16` for `Icons`, `20x20` for `NavIcons`, and `48x48` for both Emoji and Glyphs)
- [Icons] Adds secondary icons for non-Logo icons.

# v15.0.0

- [Theming] **BREAKING** Adds theming logic to box shadows and remove it from constants ([#610](https://github.com/curology/radiance-ui/pull/610))
- [Fonts/Typography] **BREAKING** Remove FONTS and TYPOGRAPHY_CONSTANTS from constants (access via theme now) ([#614](https://github.com/curology/radiance-ui/pull/614))

# v14.0.1

- [Hotfix] v14.0.0 re-release for CJS build correction

# v14.0.0

- [Theming] Adds theming logic to typography display, heading and title ([#589](https://github.com/curology/radiance-ui/pull/589))
- [Colors] Complete refactor and cleanup of colors usage ([#584](https://github.com/curology/radiance-ui/pull/584))
  - **BREAKING**: `COLORS` cannot be imported as a constant anymore. Colors must be accessed via the theme object

# v13.3.0

- [Tab] Update Secondary inactive Tab color ([#588](https://github.com/curology/radiance-ui/pull/588))
- [Theming] Update Secondary button font-size and font-weight ([#585](https://github.com/curology/radiance-ui/pull/585))
- [Theming] Update Secondary Colors and Fonts ([#524](https://github.com/curology/radiance-ui/pull/524))
- [Theming] Updates generation of Icons to be theme-aware ([#529](https://github.com/curology/radiance-ui/pull/529))
- [Field] Update Secondary placeholder color ([#582](https://github.com/curology/radiance-ui/pull/582))
- [Icon] Remove hard-coded Arrow Icon fill color ([#580](https://github.com/curology/radiance-ui/pull/580))
- [Internal] Streamlines multiple `babel.config.js` files into one ([#551](https://github.com/curology/radiance-ui/pull/551))
- [Internal] Updates multiple dependencies

# v13.2.0

- [Theming] Add TYPOGRAPHY constants to theme object ([#520](https://github.com/curology/radiance-ui/pull/520))
- [PropTypes] Fix ImmersiveModal title prop typing ([#518](https://github.com/curology/radiance-ui/pull/518))

# v13.1.1

- [Bugfix] Removes manual focus handling for ImmersiveModal, fixing scroll behavior when two or more focusable footer items are present ([#517](https://github.com/curology/radiance-ui/pull/517))

# v13.1.0

- [Theming] Adds FONTS constants to theme objects ([#509](https://github.com/curology/radiance-ui/pull/509))
- [Theming] Adds `'transparent'` as valid property of COLORS object ([#512](https://github.com/curology/radiance-ui/pull/512))

# v13.0.0

- [Theming] Adds theming functionality to components ([#466](https://github.com/curology/radiance-ui/pull/466))
  - **BREAKING**: All component usage _must_ be wrapped with an `emotion-theming` `<ThemeProvider>`, as component internals require access to a provided theme object.
    - See [da0fd4c](https://github.com/curology/radiance-ui/commit/da0fd4ced5c9064c94ebb7c607b845fe156e7e95#diff-e201de4e2ea4ee79f492c0495d7f3fce6389034fe26bfb8f3c877f8c03edf914R88) for how our [https://radiance-ui.curology.com/](https://radiance-ui.curology.com/) storybook site is configured
    - See [#505](https://github.com/curology/radiance-ui/pull/505/files) for wrapping test utilites with theme context.

# v12.4.0

- [Internal] Refactor Dropdown, refactor variables names and standarize code across components

# v12.3.1

- [Internal] Convert Carousel, DialogModal, OffClickWrapper to functional components

# v12.3.0

- [Internal] Convert class to functional components
- [Typescript] Make Button onClick prop required

# v12.2.1

- [Hotfix] Fix VerificationMessages animation and ImmersiveModal exitlogic fix

# v12.2.0

- [Internal] TypeScript conversion: Typography, Tooltip, Tabs, Transition, SelectorButton/Checkbox/RadioButton

# v12.1.0

- [Internal] TypeScript conversion: VerificationMessages, Field

# v12.0.0

- [API] **BREAKING**: Removes `BOX_SHADOWS.focusSecondary`. Please replace usage with with `BOX_SHADOWS.focus`. ([#400](https://github.com/curology/radiance-ui/pull/400))
- [API] New focus states `BOX_SHADOWS.focus` and `BOX_SHADOWS.focusInner`. ([#390](https://github.com/curology/radiance-ui/pull/390))
- [Styling] Added new focus states to Alert, Banner, DialogModal, Field, ImmersiveModal, OptionButton, SelectorButton, TextButton, and Toggle components. ([#390](https://github.com/curology/radiance-ui/pull/390), [#394](https://github.com/curology/radiance-ui/pull/394), [#397](https://github.com/curology/radiance-ui/pull/397), [#400](https://github.com/curology/radiance-ui/pull/400))
- [Styling] Add `focus-visible` polyfill to enable keyboard-only focus states. ([#390](https://github.com/curology/radiance-ui/pull/390))
- [Internal] Updated a number of underlying dependencies and related configuration.
- [Styling] Update `BOX_SHADOWS.clickable` and `BOX_SHADOWS.clickableHover` values. ([#338](https://github.com/curology/radiance-ui/pull/338))
- [API] Adds programmable (4px default) border-radius to Accordion, Dropdown, and OptionButton components ([#338](https://github.com/curology/radiance-ui/pull/338), [#371](https://github.com/curology/radiance-ui/pull/371), [#374](https://github.com/curology/radiance-ui/pull/374))
- [API] Export Tooltip Arrow icon as stand-alone icon. ([#386](https://github.com/curology/radiance-ui/pull/386))

[v11.1.0 to v12.0.0 comparison view](https://github.com/curology/radiance-ui/compare/12479556aa3d3faf4499cef9de1eb0c74c962f17..master)

# v11.1.0

- Adds new positioning of arrows to the Carousel component. It is denoted as a prop with the name 'bottomRightAlignedArrows'.

# v11.0.0

This update is **potentially breaking**. Applications that use different versions of emotion than those used in `radiance-ui` can result in unexpected behavior when adding styling to already-styled components. This update adds explicit `peerDependencies` to account for this.

- [Dependencies] Update [emotion](https://github.com/emotion-js/emotion) packages ([#323](https://github.com/curology/radiance-ui/pull/323))

# v10.3.0

- [Internal] TypeScript conversion: Indicator, Chip, LoadingSpinner, OffClickWrapper ([#313](https://github.com/curology/radiance-ui/pull/313))

# v10.2.1

- Fixes some accessibility information on the Dropdown component ([#307](https://github.com/curology/radiance-ui/pull/307))

# v10.2.0

- Adds a disabled prop to the Checkbox component ([#303](https://github.com/curology/radiance-ui/pull/303))

# v10.1.0

- [Internal] TypeScript conversion: Callout and Carousel ([#300](https://github.com/curology/radiance-ui/pull/300))

# v10.0.0

- Removes id from the `LoadingSpinner` ([#282](https://github.com/curology/radiance-ui/pull/282))
- Traps keyboard focus in `DialogModal` when modal is open ([#283](https://github.com/curology/radiance-ui/pull/283))
- Adds focus box shadow to `TextButton` ([#284](https://github.com/curology/radiance-ui/pull/284))
- Adds keyboard control to `Accordion` ([#285](https://github.com/curology/radiance-ui/pull/282852))

# v9.3.2

- Adds missing `aria-disabled` prop to Dropdown options ([#276](https://github.com/curology/radiance-ui/pull/276))

# v9.3.1

- Fixes some invalid accessibility information in the Dropdown component, and updates the Option Button documentation ([#275](https://github.com/curology/radiance-ui/pull/275))

# v9.3.0

- Fixes accessibility issues with Option Button, Button, and Dropdown Components ([#261](https://github.com/curology/radiance-ui/pull/261))

# v9.2.0

- [Internal] TypeScript conversion: Buttons ([#252](https://github.com/curology/radiance-ui/pull/252))

# v9.1.3

- Add `optionsContainerMaxHeight` prop to the `Dropdown` component ([#256](https://github.com/curology/radiance-ui/pull/256))

# v9.1.2

- [Internal] Suppress Deprecation notice triggered by PropTypes ([#249](https://github.com/curology/radiance-ui/pull/249))

# v9.1.1

- [Internal] TypeScript conversion: Alert, Avatar, Banner ([#248](https://github.com/curology/radiance-ui/pull/248))

# v9.1.0

- Update various glyphs and icons ([#250](https://github.com/curology/radiance-ui/pull/250))

# v9.0.0

- Support effective tree shaking of the shared-components directory ([#246](https://github.com/curology/radiance-ui/pull/246))

# v8.3.1

- Changed radio button icon to a dot instead of a checkmark ([#244](https://github.com/PocketDerm/radiance-ui/pull/244))

# v8.3.0

- [Feature] DialogModal redesign ([#240](https://github.com/PocketDerm/radiance-ui/pull/240))

# v8.2.0

- Deprecate SPACING constant ([#241](https://github.com/curology/radiance-ui/pull/241))

# v8.1.0

- [Feature] ImmersiveModal redesign ([#237](https://github.com/PocketDerm/radiance-ui/pull/237))

# v8.0.1

- [Feature] `truncateText` prop rename ([#233](https://github.com/PocketDerm/radiance-ui/pull/233))

# v8.0.0

- Adds `sideEffects: false` to `package.json` for tree-shaking of `lib` directory.

# v7.1.1

- [Feature] `preventTextTruncating` prop rename ([#231](https://github.com/PocketDerm/radiance-ui/pull/231))

# v7.1.0

- [Feature] `truncateText` prop for Alerts ([#229](https://github.com/PocketDerm/radiance-ui/pull/229))

# v7.0.1

- [Bug] Fix svgr build ([#221](https://github.com/PocketDerm/radiance-ui/pull/221))

# v7.0.0

- [Internal] Convert Project to Typescript

# v7.0.0-beta.4

- [Internal] Convert Project to Typescript: Refactor TS files

# v7.0.0-beta.3

- [Internal] Convert Project to Typescript: update TSC declaration build config

# v7.0.0-beta.2

- [Internal] Convert Project to Typescript: update TS babel plugin

# v7.0.0-beta.1

- [Internal] Convert Project to Typescript: transpile TS files with Babel for Rollup build

# v7.0.0-beta.0

- [Internal] Convert Project to Typescript Updated ([#148](https://github.com/PocketDerm/radiance-ui/pull/148))

# v6.4.1

- Added CheckPlusIcon and CheckMinusIcon ([#220](https://github.com/curology/radiance-ui/pull/220))

# v6.4.0

- Update Button components to accept buttonColor as a prop
- ([#218](https://github.com/curology/radiance-ui/pull/219))

# v6.3.2

- Design system updates to glyphs ([#218](https://github.com/curology/radiance-ui/pull/218))

# v6.3.1

- Design system updates to emojis and glyphs ([#217](https://github.com/curology/radiance-ui/pull/217))

# v6.3.0

- Design system updates to emojis and glyphs ([#215](https://github.com/curology/radiance-ui/pull/215))

# v6.2.0

- Added 2 glyphs, updated CheckBadgeGlyph ([#214](https://github.com/curology/radiance-ui/pull/214))

# v6.1.3

- [Bug] Fix Indicator display mechanism ([#213](https://github.com/curology/radiance-ui/pull/213))

# v6.1.2

- [Bug] Fix tooltip display prop ([#212](https://github.com/curology/radiance-ui/pull/212))

# v6.1.1

- [Bug] Fix SVG class selector to avoid leaking styles to nested SVG ([#208](https://github.com/curology/radiance-ui/pull/208))

# v6.1.0

- Update Alerts and Banners styles
- Replace BulkErrors component for VerificationMessages (accepts success and error messages)
- Update Field component to use new VerificationMessages components and update styles
- ([#208](https://github.com/curology/radiance-ui/pull/208))

# v6.0.0

- Update Buttons, Chip and Tooltip components ([#204](https://github.com/curology/radiance-ui/pull/204))

# v5.1.0

- Added Callout and Indicator new components ([#202](https://github.com/curology/radiance-ui/pull/202))

# v5.0-beta

- [Internal] Convert Project to Typescript ([#148](https://github.com/PocketDerm/radiance-ui/pull/148))
- [Feature] Publish Generated Types declarations

# v4.2.22

- Updated border width on OptionButton ([#197](https://github.com/curology/radiance-ui/pull/197))

# v4.2.21

- Updated border width on Buttons / Checkboxes / Radios ([#195](https://github.com/curology/radiance-ui/pull/195))
- Updated size of ChevronIcon within Accordion component ([#196](https://github.com/curology/radiance-ui/pull/196))

# v4.2.20

- Added deprecation warnings for outdated icons / emojis / glyphs and removed from storybook ([#194](https://github.com/curology/radiance-ui/pull/194))

# v4.2.19

- Added Logos and NavIcons ([#192](https://github.com/curology/radiance-ui/pull/192))

# v4.2.18

- Design system updates to emojis ([#172](https://github.com/curology/radiance-ui/pull/172))

# v4.2.17

- Removed masks in new icon and glyph svgs: ([#187](https://github.com/curology/radiance-ui/pull/187)), ([#188](https://github.com/curology/radiance-ui/pull/188)), ([#189](https://github.com/curology/radiance-ui/pull/189)), ([#190](https://github.com/curology/radiance-ui/pull/190)), and ([#191](https://github.com/curology/radiance-ui/pull/191))

# v4.2.16

- Testing mask removal in SVGs to resolve fill-issue ([#186](https://github.com/curology/radiance-ui/pull/186))

# v4.2.15

- Design system updates to icons ([#180](https://github.com/curology/radiance-ui/pull/180)), ([#181](https://github.com/curology/radiance-ui/pull/181)), and ([#182](https://github.com/curology/radiance-ui/pull/182))

# v4.2.14

- Design system updates to glyphs ([#175](https://github.com/curology/radiance-ui/pull/175)), ([#176](https://github.com/curology/radiance-ui/pull/176)), and ([#177](https://github.com/curology/radiance-ui/pull/177))

# v4.2.13

- [Internal] Another re-release. Testing release steps.

# v4.2.12

- No code changes. Re-tagging of 4.2.11 - failed NPM release

# v4.2.11

- [Internal] Update devDependency `eslint-plugin-curology`. ([#179](https://github.com/PocketDerm/radiance-ui/pull/179))
- [Internal] Update devDependencies `babel-jest`, `enzyme`, `enzyme-adapter-react-16`, `jest`, and `jest-emotion`. ([#173](https://github.com/PocketDerm/radiance-ui/pull/173))
- [Internal] Update React Storybook to `5.3.9` ([#174](https://github.com/PocketDerm/radiance-ui/pull/174))
  - Replace `@storybook/addon-storysource/loader` with `@storybook/source-loader`
  - Rename `.storybook/addons.js` to `.storybook/manager.js`
  - Rename `.storybook/config.js` to `.storybook/preview.js`

# v4.2.10

- [Internal] Add `@svgr/cli` as devDependency, update scripts. ([#178](https://github.com/PocketDerm/radiance-ui/pull/178))

# v4.2.9

- [Patch] Point Storybook font assets to new bucket ([#151](https://github.com/PocketDerm/radiance-ui/pull/151))
- [Patch] serialize-javascript Vulnerability Fix ([#150](https://github.com/PocketDerm/radiance-ui/pull/150))

# v4.2.8

- [Patch] Sequence onExit callback after setState in Alert component ([#149](https://github.com/PocketDerm/radiance-ui/pull/149))

# v4.2.7

- Add id prop on modal to target scrolling context ([#147](https://github.com/PocketDerm/radiance-ui/pull/147))

# v4.2.6

- Allow node proptype for `subtext` in `OptionButton` ([#143](https://github.com/PocketDerm/radiance-ui/pull/143))

# v4.2.5

- [Chore] Update LinkButton "as" prop typing ([#144](https://github.com/PocketDerm/radiance-ui/pull/144))

# v4.2.4

- Re-release

# v4.2.3

- [Bug] Fix `Accordion` to mount expanded when `isOpen` prop is initially set to `true`. ([#142](https://github.com/PocketDerm/radiance-ui/pull/142))
- [Bug] Fix default value handling on mobile dropdown. ([#141](https://github.com/PocketDerm/radiance-ui/pull/141))

# v4.2.2

- [Patch] Update `tertiary` color constant. ([#138](https://github.com/PocketDerm/radiance-ui/pull/138))

# v4.2.1

- Added rest props to Immersive Modal. ([#137](https://github.com/PocketDerm/radiance-ui/pull/137))

# v4.2.0

- [Internal] Downgrade `@emotion` packages to `10.0.10` or nearest lesser version due to unidentified `@emotion/core 10.0.14` regression. ([#136](https://github.com/PocketDerm/radiance-ui/pull/136))

# v4.1.0

- [Security] Update `lodash-es` and `lodash` ([#134](https://github.com/PocketDerm/radiance-ui/pull/134)) ([#135](https://github.com/PocketDerm/radiance-ui/pull/135))
- [Style Fix] Prevent Option Button component width compression ([#133](https://github.com/PocketDerm/radiance-ui/pull/135))
- [Refactor] Update `storybook` + Accordion component story ([#132](https://github.com/PocketDerm/radiance-ui/pull/132))
- [Internal] Expand `jest` configuration ([#131](https://github.com/PocketDerm/radiance-ui/pull/131))
- [Internal] Update `lint-staged` configuration ([#130](https://github.com/PocketDerm/radiance-ui/pull/130))
- [Feature] Add Button component full width prop ([#129](https://github.com/PocketDerm/radiance-ui/pull/129))

# v4.0.1

- Re-releasing due to botched release

# v4.0.0

- Update deprecation notice warnings ([PR #127](https://github.com/PocketDerm/radiance-ui/pull/127))
- **BREAKING**: Remove Alert component text prop code ([PR #126](https://github.com/PocketDerm/radiance-ui/pull/126))
- Update Button and RoundButton loading prop usage ([PR #125](https://github.com/PocketDerm/radiance-ui/pull/125))
- Update emotion dependency usage ([PR #124](https://github.com/PocketDerm/radiance-ui/pull/124))
- Add Apercu Mono font in monoFont declaration ([PR #123](https://github.com/PocketDerm/radiance-ui/pull/123))
- Update box-shadow color ([PR #122](https://github.com/PocketDerm/radiance-ui/pull/122))

# v3.0.0

- Update Storybook 4 to 5 ([PR #121](https://github.com/PocketDerm/radiance-ui/pull/121))

## v2.1.1

- Added prop to Accordion ([PR #117](https://github.com/PocketDerm/radiance-ui/pull/117))

## v2.1.0

- Add CircleCI (replacing Codeship) ([PR #114](https://github.com/PocketDerm/radiance-ui/pull/114))

## v2.0.40

- Added InstagramIcon to icon library ([PR #108](https://github.com/PocketDerm/radiance-ui/pull/108))

## v2.0.39

- Update Alert component to take in `content` prop to render ([PR #106](https://github.com/PocketDerm/radiance-ui/pull/106))

## v2.0.38

- Added deprecation warning, only for dev environments ([PR #105](https://github.com/PocketDerm/radiance-ui/pull/105))

## v2.0.37

- Added calendar icon ([PR #104](https://github.com/PocketDerm/radiance-ui/pull/104))

## v2.0.36

- Exclude external dependencies from build ([PR #103](https://github.com/PocketDerm/radiance-ui/pull/103))

## v2.0.35

- Added SmileIcon and DropIcon ([PR #102](https://github.com/PocketDerm/radiance-ui/pull/102))

## v2.0.34

- Added SPACER constants ([PR #101](https://github.com/PocketDerm/radiance-ui/pull/101))

## v2.0.33

- Added RoundButton action type and refactor to use it in ImmersiveModal, Modal and Carousel ([PR #99](https://github.com/PocketDerm/radiance-ui/pull/99))

## v2.0.32

- Fixed Modal/Alerts/Tooltip spacing and secondary color for option button ([PR #97](https://github.com/PocketDerm/radiance-ui/pull/97) and [PR #100](https://github.com/PocketDerm/radiance-ui/pull/100))

## v2.0.31

- Added OptionButton subtext prop ([PR #98](https://github.com/PocketDerm/radiance-ui/pull/98))

## v2.0.30

- Added OffClickWrapper documentation ([PR #96](https://github.com/PocketDerm/radiance-ui/pull/96))

## v2.0.29

- Modal Component - fix global styles ([PR #95](https://github.com/PocketDerm/radiance-ui/pull/95))

## v2.0.28

- Added Box Shadows Example ([PR #94](https://github.com/PocketDerm/radiance-ui/pull/94))

## v2.0.27

- New Toggle component ([PR #92](https://github.com/PocketDerm/radiance-ui/pull/92))

## v2.0.26

- New Avatar component ([PR #93](https://github.com/PocketDerm/radiance-ui/pull/93))

## v2.0.25

- Field SVG error icon fixes ([PR #91](https://github.com/PocketDerm/radiance-ui/pull/91))

## v2.0.24

- Option Button - add margin bottom ([PR #90](https://github.com/PocketDerm/radiance-ui/pull/90))

## v2.0.23

- Add Option Button component ([PR #89](https://github.com/PocketDerm/radiance-ui/pull/89))

## v2.0.22

- Add Progress Bar component ([PR #88](https://github.com/PocketDerm/radiance-ui/pull/88))

## v2.0.21

- Add Bulk Errors component ([PR #86](https://github.com/PocketDerm/radiance-ui/pull/86))

## v2.0.20

- Add Transition components ([PR #87](https://github.com/PocketDerm/radiance-ui/pull/87))

## v2.0.19

- Add Field component ([PR #82](https://github.com/PocketDerm/radiance-ui/pull/82))

## v2.0.18

- Add Tabs component ([PR #85](https://github.com/PocketDerm/radiance-ui/pull/85))

## v2.0.17

- RoundButton - move click handler and adjust styles ([PR #83](https://github.com/PocketDerm/radiance-ui/pull/83))
- Refactor button stories ([PR #83](https://github.com/PocketDerm/radiance-ui/pull/83))

## v2.0.16

- Adjust and Refactor Colors ([PR #84](https://github.com/PocketDerm/radiance-ui/pull/84)))

## v2.0.15

- Refactor Loading Spinner HTML ([PR #80](https://github.com/PocketDerm/radiance-ui/pull/80)))

## v2.0.14

- Add noticeable-acne-emoji ([PR #64](https://github.com/PocketDerm/radiance-ui/pull/64)))

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
  - equals-icon ([PR #58](https://github.com/PocketDerm/radiance-ui/pull/58))
  - spaceship-glyph ([PR #56](https://github.com/PocketDerm/radiance-ui/pull/56))
  - mild-acne-emoji ([PR #63](https://github.com/PocketDerm/radiance-ui/pull/63))
  - severe-acne-emoji ([PR #65](https://github.com/PocketDerm/radiance-ui/pull/65))
  - minus-icon ([PR #55](https://github.com/PocketDerm/radiance-ui/pull/55))
  - course-glyph ([PR #57](https://github.com/PocketDerm/radiance-ui/pull/57))
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
