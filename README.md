# DartText

a native JS implementation of functions of [dart characters library](https://github.com/dart-lang/characters)

Tested with support of Emoji V14 Spec

## Installation

```
npm i dart-text
```

## Usage

```js
const dartText = require('dart-text');

dartText.length('👨‍👨‍👧‍👧');
// returns 1

dartText.substring('Emojis 👍🏽 are 🍆 poison. 🌮s are bad.', 7, 14);
// returns "👍🏽 are 🍆"

dartText.substr('Emojis 👍🏽 are 🍆 poison. 🌮s are bad.', 7, 1);
// returns "👍🏽"
```
