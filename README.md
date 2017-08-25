# sync-package-pom

> Synchronize the version from the `package.json` with the one in the `pom.xml` file.

## Installation

```js
$ npm i --save-dev sync-package-pom
```

## Usage

```
$ sync-package-pom [path-to-package-file] [path-to-pom-file]
```

Or as a global package:

```
$ npm i -g sync-package-pom
$ sync-package-pom [path-to-package-file] [path-to-pom-file]
```

Both parameters are optional. If no `package.json` or `pom.xml` is specified it will assume they are present in the current directory.
