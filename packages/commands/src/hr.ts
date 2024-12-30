import { VokitCommand } from '@vokit-editor/core';

export const hrCommand = new VokitCommand('hr', (ctx) => {
  ctx.editorEgine.insert(() => {
    return {
      text: '------------------------------------',
    };
  });
});
