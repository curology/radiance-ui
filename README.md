# ✨ Radiance UI
[ ![Codeship Status for PocketDerm/radiance-ui](https://app.codeship.com/projects/b14c5140-badd-0136-4a26-6e82e5b69006/status?branch=master)](https://app.codeship.com/projects/312533)

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
people (mostly within the Curology organization).

1. Pull latest master and check out the master branch.
2. Commit an update to the CHANGELOG.md file with details.
3. Run `yarn run publish-package` to build the bundled files and publish
   to NPM.
4. Push changes made to `package.json` to remote repository
5. On GitHub, tag a release with the proper version and details. You can
   do that
[here](https://github.com/PocketDerm/radiance-ui/releases/new).
