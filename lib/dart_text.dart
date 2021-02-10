/// Support for doing something awesome.
///
/// More dartdocs go here.
@JS()
library dart_text;

import 'package:js/js.dart';
import 'src/functions.dart';

@JS('textLength')
external set _textLength(int Function(String) f);

void main() {
  _textLength = allowInterop(getTextLength);
}
