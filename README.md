# API client

> Ethereum cryptocurrency tracker (client side)

[![license-shield][]](LICENSE)

## Table Of Contents

- [Setup](#setup)
- [Usage](#usage)
- [Deployment](#deployment)
- [Storybook](#storybook)
- [Scripts](#scripts)
- [Built With](#built-with)
- [Release History](#release-history)
- [Versionning](#versionning)
- [Authors](#authors)
- [License](#license)

## Setup

- Install the dependencies:

```bash
yarn install
```

- Create the `.env` file from [.sample.env](.sample.env):

```bash
cp ./.sample.env ./.env
```

## Usage

- Run the client locally in development mode:

```bash
yarn dev
```

- The application will be available from `http://localhost:3000` by default.

## Deployment

- The application can be built:

```bash
yarn build
```

- Deployed files are located in the `dist` repository.

## Storybook

- Run the storybook locally in development mode:

```bash
yarn sb
```

- The storybook will be available from `http://localhost:6006` by default.
- The storybook can also be built:

```bash
yarn sb:build
```

## Scripts

- `yarn dev`: See [Usage](#usage).
- `yarn build`: See [Deployment](#deployment).
- `yarn sb`: See [Storybook](#storybook).
- `yarn sb:build`: See [Storybook](#storybook).
- `yarn format`: Format the code, apply needed modifications.
- `yarn lint`: Check the code quality.
- `yarn test`: Test the code and generate the test coverage.
- `yarn test:watch`: Watch for modifications to run the tests.

## Built With

[Yarn](https://yarnpkg.com) |
[Node.js](https://nodejs.org) |
[TypeScript](https://www.typescriptlang.org) |
[React](https://reactjs.org) |
[React Router](https://reactrouter.com) |
[Sass](https://sass-lang.com) |
[webpack](https://webpack.js.org) |
[Eslint](https://eslint.org) |
[Prettier](https://prettier.io) |
[Jest](https://jestjs.io) |
[Enzyme](https://enzymejs.github.io) |
[Storybook](https://storybook.js.org) |
[Font Awesome](https://fontawesome.com) |
[Lodash](https://lodash.com) |
[Moment.js](https://momentjs.com) |
[Numeral.js](http://numeraljs.com) |
[Ethers](https://docs.ethers.io/) |
[API client](https://github.com/totentech/api-client) |
[Trading View](https://www.tradingview.com/)

## Release History

Check the [`CHANGELOG.md`](CHANGELOG.md) file for the release history.

## Versionning

We use [SemVer](http://semver.org/) for versioning. For the versions available,
see the [tags on this repository][tags-link].

## Authors

- **[Benjamin Guibert](https://github.com/benjamin-guibert)**: Creator & main
  contributor

See also the list of [contributors][contributors-link] who participated in this
project.

## License

[![license-shield][]](LICENSE)

This project is licensed under the MIT License. See the [`LICENSE`](LICENSE)
file for details.

[test-workflow-shield]: https://github.com/cryptotentanz/etherbeam-client/workflows/Test/badge.svg?branch=main
[contributors-link]: https://github.com/cryptotentanz/etherbeam-client/contributors
[license-shield]: https://img.shields.io/github/license/cryptotentanz/etherbeam-client.svg
