import 'package:dart_text/dart_text.dart';
import 'package:js/js.dart';
import 'package:node_interop/node.dart';
import 'package:node_interop/util.dart';

void main() {
  setExport("length", allowInterop(getTextLength));
}
