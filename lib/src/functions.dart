import 'dart:math';

import 'package:characters/characters.dart';

int length(String text) {
  return text.characters.length;
}

String limit(String text, int count) {
  return text.characters.take(max(count, 0)).toString();
}

String substring(String text, int startIndex, int endIndex) {
  return text.characters
      .take(max(endIndex, 0))
      .skip(max(startIndex, 0))
      .toString();
}

String substr(String text, int startIndex, int count) {
  return text.characters
      .skip(max(startIndex, 0))
      .take(max(count, 0))
      .toString();
}
