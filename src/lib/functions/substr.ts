import { substring } from './substring';

export function substr(text: string, start: number, count?: number) {
  if (count === undefined || count === null) {
    return substring(text, start);
  }
  return substring(text, start, start + count);
}
