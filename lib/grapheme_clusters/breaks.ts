import { categoryControl, categoryEoT, stateNoBreak } from './constants';
import { high, low, move } from './table';

export class Breaks {
  // Text being iterated.
  private readonly base: string;
  // end of substring of [base] being iterated.
  private readonly end: number;
  // Position of the first yet-unprocessed code point.
  private cursor: number;
  // Current state based on code points processed so far.
  private state: number;

  public constructor(base: string, cursor: number, end: number, state: number) {
    this.base = base;
    this.cursor = cursor;
    this.end = end;
    this.state = state;
  }

  // The index of the next grapheme cluster break in last-to-first index order.
  //
  // Returns a negative number if there are no further breaks,
  // which means that [cursor] has reached [end].
  public nextBreak(): number {
    while (this.cursor < this.end) {
      let breakAt = this.cursor;
      let char = this.base.charCodeAt(this.cursor++) as number;
      if ((char & 0xfc00) != 0xd800) {
        this.state = move(this.state, low(char));
        if ((this.state & stateNoBreak) == 0) {
          return breakAt;
        }
        continue;
      }
      // The category of an unpaired lead surrogate is Control.
      let category = categoryControl;
      if (this.cursor < this.end) {
        let nextChar = this.base.charCodeAt(this.cursor) as number;
        if ((nextChar & 0xfc00) == 0xdc00) {
          category = high(char, nextChar);
          this.cursor++;
        }
      }
      this.state = move(this.state, category);
      if ((this.state & stateNoBreak) == 0) {
        return breakAt;
      }
    }
    this.state = move(this.state, categoryEoT);
    if ((this.state & stateNoBreak) == 0) {
      return this.cursor;
    }
    return -1;
  }
}
