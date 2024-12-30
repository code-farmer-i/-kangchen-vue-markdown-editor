import { VokitCommand } from '@vokit-editor/core';

export const clearCommand = new VokitCommand('clear', (ctx) => {
  ctx.editorEgine.call('clear');
});
