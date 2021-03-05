export const categoryCR = 0;
export const categoryZWJ = 1;
export const categoryControl = 2;
export const categoryOther = 3; // Any character not in any other category.
export const categoryExtend = 4;
export const categorySpacingMark = 5;
export const categoryRegionalIndicator = 6;
export const categoryPictographic = 7;
export const categoryLF = 8;
export const categoryPrepend = 9;
export const categoryL = 10;
export const categoryV = 11;
export const categoryT = 12;
export const categoryLV = 13;
export const categoryLVT = 14;
export const categoryEoT = 15; // End of Text (synthetic input)

// Automaton states for forwards automaton.

export const stateSoT = 0; // Start of text (or grapheme).
export const stateBreak = 0x10; // Always break before next.
export const stateCR = 0x20; // Break unless next is LF.
export const stateOther = 0x30; // Break unless next is Extend, ZWJ, SpacingMark.
export const statePrepend = 0x40; // Only break if next is Control/CR/LF/eot.
export const stateL = 0x50; // As Other unless next is L, V, LV, LVT.
export const stateV = 0x60; // As Other unless next is V, T.
export const stateT = 0x70; // As Other unless next is T.
export const statePictographic = 0x80; // As Other unless followed by Ext* ZWJ Pic.
export const statePictographicZWJ = 0x90; // As Other unless followed by Pic.
export const stateRegionalSingle = 0xa0; // As Other unless followed by RI
export const stateSoTNoBreak = 0xb0; // As SoT but never cause break before next.

/// Bit flag or'ed to the automaton output if there should not be a break
/// before the most recent input character.
export const stateNoBreak = 1;

// Backwards Automaton extra/alternative states and categories.

export const categorySoT = 15; // Start of Text (synthetic input)

export const stateEoT = 0; // Start of text (or grapheme).
export const stateLF = 0x20; // Break unless prev is CR.
export const stateExtend = 0x40; // Only break if prev is Control/CR/LF/sot.
export const stateZWJPictographic = 0x90; // Preceeded by Pic Ext*.
export const stateEoTNoBreak = 0xb0; // As EoT but never cause break before.
export const stateRegionalEven = 0xc0; // There is an even number of RIs before.
export const stateRegionalOdd = stateZWJPictographic; // There is an odd (non-zero!) number of RIs before.

/// State requesting a look-ahead for an even or odd number of RIs.
export const stateRegionalLookahead = 0xd0;

/// Minimum state requesting a look-ahead.
export const stateLookaheadMin = stateRegionalLookahead;

/// State requesting a look-ahead for Pic Ext*.
export const stateZWJPictographicLookahead = 0xe0;
