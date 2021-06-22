import React from 'react';
import {
  getDefaultKeyBinding,
  // KeyBindingUtil,
} from 'draft-js';

// const {hasCommandModifier} = KeyBindingUtil;

export const myKeyBindingFn = (e: React.KeyboardEvent<{}>) => {
  if (e.key === 'Backspace') {
    return 'fayeditor-backspace';
  }
  return getDefaultKeyBinding(e);
}
