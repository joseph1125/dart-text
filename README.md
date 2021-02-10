# DartText

a nodejs wrapper of [dart characters library](https://github.com/dart-lang/characters)

## Installation

```
npm i dart_text
```

## Usage

```js
const dartText = require("dart_text");

dartText.length("👨‍👨‍👧‍👧");
// returns 1

dartText.limit("Hello world", 5);
// returns "Hello"

dartText.substring("Emojis 👍🏽 are 🍆 poison. 🌮s are bad.", 7, 14);
// returns "👍🏽 are 🍆"

dartText.substr("Emojis 👍🏽 are 🍆 poison. 🌮s are bad.", 7, 1);
// returns "👍🏽"
```
