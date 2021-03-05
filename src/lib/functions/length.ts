import { Breaks } from '../grapheme_clusters/breaks';
import { stateSoTNoBreak } from '../grapheme_clusters/constants';

export function length(text: string) {
  if (text.length === 0) {
    return 0;
  }
  const breaks = new Breaks(text, 0, text.length, stateSoTNoBreak);
  let length = 0;
  while (breaks.nextBreak() >= 0) {
    length++;
  }
  return length;
}
