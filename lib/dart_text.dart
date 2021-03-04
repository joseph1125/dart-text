import 'dart:math';

import 'package:characters/characters.dart';

int length(String text) {
  return text.characters.length;
}

String substring(String text, int startIndex, [int endIndex]) {
  return text.characters.getRange(startIndex, endIndex).toString();
}

String substr(String text, int startIndex, [int count]) {
  return text.characters
      .skip(max(startIndex, 0))
      .take(max(count ?? length(text), 0))
      .toString();
}

int firstIndexOf(String text, String target) {
  if (text.characters == target.characters) {
    return 0;
  }
  var chunks = text.characters.split(target.characters);
  if (chunks.length == 1) {
    return -1;
  }
  return chunks.first.length;
}

int lastIndexOf(String text, String target) {
  if (text.characters == target.characters) {
    return 0;
  }
  var chunks = text.characters.split(target.characters);
  if (chunks.length == 1) {
    return -1;
  }
  return text.characters.length - chunks.last.length - target.characters.length;
}
