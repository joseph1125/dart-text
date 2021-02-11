declare module "dart-text" {
  export function length(text: string): number;
  export function substring(
    text: string,
    startIndex: number,
    endIndex?: number
  ): string;
  export function substr(
    text: string,
    startIndex: number,
    count?: number
  ): string;
  export function firstIndexOf(text: string, target: string): string;
  export function lastIndexOf(text: string, target: string): string;
}
