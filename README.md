# StatNLP Resource Website
[![Build Status](https://travis-ci.org/sutd-statnlp/web-resource.svg?branch=master)](https://travis-ci.org/sutd-statnlp/web-resource)
[![codecov](https://codecov.io/gh/sutd-statnlp/web-resource/branch/master/graph/badge.svg)](https://codecov.io/gh/sutd-statnlp/web-resource)
[![dependencies Status](https://david-dm.org/sutd-statnlp/web-resource/status.svg)](https://david-dm.org/sutd-statnlp/web-resource)
[![devDependencies Status](https://david-dm.org/sutd-statnlp/web-resource/dev-status.svg)](https://david-dm.org/sutd-statnlp/web-resource?type=dev)
[![](https://images.microbadger.com/badges/image/statnlp/web-resource.svg)](https://microbadger.com/images/statnlp/web-resource)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/sutd-statnlp/web-resource/blob/master/LICENSE)

## Installation

``` bash
# install dependencies
npm install

```

## Testing

``` bash
# run unit tests
npm test

# run end-to-end tests
npm run e2e
```

## Build and Run

``` bash

# serve with hot reload at localhost:4200
npm start

# build for production with minification
npm run build

```

## Docker support

Build docker image

```
bash Dockerbuild.sh
```

Run docker container

```
docker run -d --name web-resource -p 8000:8000 statnlp/web-resource
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/sutd-statnlp/web-resource/tags).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
