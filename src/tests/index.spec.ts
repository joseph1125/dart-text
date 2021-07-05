import test from 'ava';

import {
  firstIndexOf,
  lastIndexOf,
  length,
  split,
  substr,
  substring,
} from '../lib';

test('Length of text', (t) => {
  t.is(length('👨‍👨‍👧‍👧'), 1);
  t.is(length(''), 0);
  t.is(length('abc'), 3);
});

test('substring', (t) => {
  t.is(substring("", 1, 3), "");
  t.is(substring("", 0, 0), "");
  t.is(substring('Emojis 👍🏽 are 🍆 poison. 🌮s are bad.', 7, 14), '👍🏽 are 🍆');
  t.is(substring('Emojis 👍🏽 are 🍆 poison. 🌮s are bad.', 7, 7), '');
  t.throws(() => substring('Emojis 👍🏽 are 🍆 poison. 🌮s are bad.', -1), {message: 'start should be >= 0'});
  t.throws(() => substring('Emojis 👍🏽 are 🍆 poison. 🌮s are bad.', 7, 5), {message: 'end should be >= start'});
});

test('substr', (t) => {
  t.is(substr('Emojis 👍🏽 are 🍆 poison. 🌮s are bad.', 7, 1), '👍🏽');
  t.is(substr('Emojis 👍🏽 are 🍆 poison. 🌮s are bad.', 7), '👍🏽 are 🍆 poison. 🌮s are bad.');
});

test('first index of', (t) => {
  t.is(firstIndexOf('Emojis 👍🏽 are 🍆 poison. 🌮s are bad.', '👍🏽'), 7);
  t.is(firstIndexOf('a', 'a'), 0);
  t.is(firstIndexOf('a%a', 'b'), -1);
});

test('last index of', (t) => {
  t.is(lastIndexOf('Emojis 👍🏽 are 🍆 poison. 🌮s are bad.', 'are'), 26);
  t.is(lastIndexOf('a', 'a'), 0);
  t.is(lastIndexOf('a%a', 'b'), -1);
});

test('split', (t) => {
  t.deepEqual(Array.from(split('Emojis 👍🏽 are 🍆 poison. 🌮s are bad.')), [
    'E',
    'm',
    'o',
    'j',
    'i',
    's',
    ' ',
    '👍🏽',
    ' ',
    'a',
    'r',
    'e',
    ' ',
    '🍆',
    ' ',
    'p',
    'o',
    'i',
    's',
    'o',
    'n',
    '.',
    ' ',
    '🌮',
    's',
    ' ',
    'a',
    'r',
    'e',
    ' ',
    'b',
    'a',
    'd',
    '.',
  ]);
});
