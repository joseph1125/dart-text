import 'package:characters/characters.dart';

int getTextLength(String text) {
  return text.characters.length;
}

String limitText(String text, int count) {
  return text.characters.take(count).toString();
}

String substring(String text, int startIndex, int endIndex) {}
