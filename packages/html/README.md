[size]: https://packagephobia.now.sh/badge?p=@sanitise/html
[size-url]: https://packagephobia.now.sh/result?p=@sanitise/html

<div align="center">
  <img width="170" src="https://raw.githubusercontent.com/openbasehq/sanitise/master/assets/html.svg?token=AAASUUYWFCZ333Q6TFGY3RDBNHPIS" /><br/><br/>
</div>

[![size][size]][size-url]
[![openbase](https://img.shields.io/badge/view%20on-openbase-blue)](https://openbase.com/js/%40sanitise%2Fhtml)
[![libera manifesto](https://img.shields.io/badge/libera-manifesto-lightgrey.svg)](https://liberamanifesto.com)

# @sanitise/html

🧼 Sanitise HTML and XML from an input

## Requirements

This module requires an [Active LTS](https://github.com/nodejs/Release) Node version (v14.15.0+).

## Install

Using npm:

```console
npm install @sanitise/html
```

## Usage

```js
const { sanitise } = require('@sanitise/html');
sanitise('<div>batman</div>');
// → 'batman'
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

sanitise(false);
// → 'false'
```

## Meta

[CONTRIBUTING](/.github/CONTRIBUTING.md)

[LICENSE (MIT)](/LICENSE)
