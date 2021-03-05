import { length } from './length';

export function firstIndexOf(text: string, target: string) {
  if (text === target) {
    return 0;
  }
  const chunks = text.split(target);
  if (chunks.length === 1) {
    return -1;
  }
  return length(chunks[0]);
}

export function lastIndexOf(text: string, target: string) {
  if (text === target) {
    return 0;
  }
  const chunks = text.split(target);
  if (chunks.length === 1) {
    return -1;
  }
  return length(text) - length(chunks[chunks.length - 1]) - length(target);
}
