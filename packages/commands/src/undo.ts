import { VokitCommand } from '@vokit-editor/core';

export const undoCommand = new VokitCommand('undo', (ctx) => {
  ctx.editorEgine.call('undo');
});
