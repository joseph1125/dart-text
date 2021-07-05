import { length } from './length';
import { substr } from './substr';

export function* split(text: string) {
  const totalLength = length(text);
  for (let i = 0; i < totalLength; i++) {
    yield substr(text, i, 1);
  }
  return totalLength;
}
