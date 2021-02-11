import 'package:dart_text/dart_text.dart';
import 'package:js/js.dart';
import 'package:node_interop/node.dart';

void main() {
  setExport("length", allowInterop(length));
  setExport("substring", allowInterop(substring));
  setExport("substr", allowInterop(substr));
}
