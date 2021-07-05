import { Breaks } from '../grapheme_clusters/breaks';
import { stateSoTNoBreak } from '../grapheme_clusters/constants';

function skipIndices(
  text: string,
  count: number,
  cursor: number,
  incomingBreaks?: Breaks
) {
  if (count === 0 || cursor === text.length) {
    return cursor;
  }
  const breaks =
    incomingBreaks ?? new Breaks(text, cursor, text.length, stateSoTNoBreak);
  let currentCursor = cursor;
  do {
    const nextBreak = breaks.nextBreak();
    if (nextBreak < 0) {
      break;
    }
    currentCursor = nextBreak;
  } while (--count > 0);
  return currentCursor;
}

function skip(text: string, count: number): string {
  const start = skipIndices(text, count, 0);
  if (start === text.length) {
    return '';
  }
  return text.substring(start);
}

function take(text: string, count: number): string {
  if (count < 0) {
    throw new Error('count should be > 0');
  }
  const end = skipIndices(text, count, 0);
  if (end === text.length) {
    return text;
  }
  return text.substring(0, end);
}

export function substring(text: string, start: number, excludingEnd?: number) {
  if (start < 0) {
    throw new Error('start should be >= 0');
  }
  if (excludingEnd === undefined || excludingEnd === null) {
    return skip(text, start);
  }
  if (excludingEnd < start) {
    throw new Error('end should be >= start');
  }
  if (excludingEnd === start) {
    return '';
  }
  if (start === 0) {
    return take(text, excludingEnd);
  }
  if (text.length === 0) {
    return text;
  }
  const breaks = new Breaks(text, 0, text.length, stateSoTNoBreak);
  const startIndex = skipIndices(text, start, 0, breaks);
  if (startIndex === text.length) {
    return '';
  }
  const endIndex = skipIndices(text, excludingEnd - start, start, breaks);
  return text.substring(startIndex, endIndex);
}
