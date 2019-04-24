# Confessions server

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/malcodeman/confessions-server/blob/master/LICENSE)

Simple RESTful mongoDB API.

## Usage

.env file should look like this:

```
MONGODB_URI = mongodb://root:fakepassword1@ds229448.mlab.com:29448/confessio
PORT = 4000
```

To start the service run:

```
yarn install
yarn start
```

Database commands:

```
yarn run db:seed --posts 48
yarn run db:drop
```

## License

[MIT](./LICENSE)
