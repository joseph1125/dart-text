import 'dart:math';

import 'package:characters/characters.dart';

int getTextLength(String text) {
  return text.characters.length;
}

String limitText(String text, int count) {
  return text.characters.take(max(count, 0)).toString();
}

String substring(String text, int startIndex, int endIndex) {
  return text.characters
      .skipLast(max(getTextLength(text) - endIndex, 0))
      .skip(max(startIndex, 0))
      .toString();
}
