# ✨ Radiance UI

[![CircleCI](https://circleci.com/gh/PocketDerm/radiance-ui.svg?style=svg)](https://circleci.com/gh/PocketDerm/radiance-ui)

Curology's React based component library

## Storybook

Radiance UI has a built in storybook. Every time a new commit is made to
master, it is automatically deployed to
[https://radiance-ui.curology.com](https://radiance-ui.curology.com).

To run Storybook locally, use `yarn run storybook`.

## Contributing

To contribute to Radiance UI, please create a PR with the following in
the appropriate places:

- Source code for the component
- Tests
- A storybook story

## Tests

Tests can be run with `yarn run test`. Radiance uses Jest + Enzyme.

## Local Development Setup

If you want to test out your changes with another repo that uses
Radiance, we recommend using the `link` feature with [npm](https://docs.npmjs.com/cli/link)
or [yarn](https://yarnpkg.com/lang/en/docs/cli/link/).

## Documentation

Documentation around usage, you can also see it with knobs at: [https://radiance-ui.curology.com](https://radiance-ui.curology.com)

- [Alert](docs/alert.md)
- [Constants](docs/constants.md)
- [Icon](docs/icon.md)
- [Typography](docs/typography.md)
- [Typography Style](docs/typography-style.md)

## Publishing to NPM

You'll need access to publish to NPM so this part only applies to a few
people (mostly within the Curology organization). Once approved, merge your PR(s) into master and follow these steps:

1. Run `yarn build` and commit the `.size-snapshot.json` change either as part of your PR or as part of the CHANGELOG.md change below
2. Pull latest master and check out the master branch.
3. Commit an update to the CHANGELOG.md file with details.
4. Run `yarn run publish-package` to build the bundled files and publish
   to NPM.
5. Push changes made to `package.json` to remote repository
6. On GitHub, tag a release with the proper version and details. You can
   do that
   [here](https://github.com/PocketDerm/radiance-ui/releases/new).
