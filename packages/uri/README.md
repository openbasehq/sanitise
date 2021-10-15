[size]: https://packagephobia.now.sh/badge?p=@sanitise/html
[size-url]: https://packagephobia.now.sh/result?p=@sanitise/html

<div align="center">
  <img width="170" src="https://raw.githubusercontent.com/openbasehq/sanitise/master/assets/uri.svg?token=AAASUUZBZKJXXRDFGY6VTHTBNHP5E" /><br/><br/>
</div>

[![size][size]][size-url]
[![openbase](https://img.shields.io/badge/view%20on-openbase-blue)](https://openbase.com/js/%40sanitise%2Furl)
[![libera manifesto](https://img.shields.io/badge/libera-manifesto-lightgrey.svg)](https://liberamanifesto.com)

# @sanitise/uri

🧼 Sanitise a URI to mitigate XSS and malformed URIs

## Requirements

This module requires an [Active LTS](https://github.com/nodejs/Release) Node version (v14.15.0+).

## Install

Using npm:

```console
npm install @sanitise/uri
```

## Usage

```js
const { sanitise } = require('@sanitise/uri');

sanitise('http://bat.cave');
// → 'http://bat.cave'

sanitise(`javascript:alert('joker')`);
// → undefined
```

## Falsey Results

This package follows the behavior of `JSON.stringify`. The following results for falsey values can be expected:

```js
sanitise(undefined);
// → undefined

sanitise(null);
// → 'null'

sanitise('');
// → ''
```

### Options

### `invalidUri`

Type: `String`<br>
Default: `''`

Sets the default result value, should the `uri` passed contain an invalid protocol.

## Meta

[CONTRIBUTING](/.github/CONTRIBUTING.md)

[LICENSE (MIT)](/LICENSE)
