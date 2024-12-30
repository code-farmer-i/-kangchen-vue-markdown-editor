import { VokitCommand } from '@vokit-editor/core';

export const redoCommand = new VokitCommand('redo', (ctx) => {
  ctx.editorEgine.call('redo');
});
