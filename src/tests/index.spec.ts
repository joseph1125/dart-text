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
});

test('substring', (t) => {
  t.is(substring('Emojis 👍🏽 are 🍆 poison. 🌮s are bad.', 7, 14), '👍🏽 are 🍆');
});

test('substr', (t) => {
  t.is(substr('Emojis 👍🏽 are 🍆 poison. 🌮s are bad.', 7, 1), '👍🏽');
});

test('first index of', (t) => {
  t.is(firstIndexOf('Emojis 👍🏽 are 🍆 poison. 🌮s are bad.', '👍🏽'), 7);
});

test('last index of', (t) => {
  t.is(lastIndexOf('Emojis 👍🏽 are 🍆 poison. 🌮s are bad.', 'are'), 26);
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
