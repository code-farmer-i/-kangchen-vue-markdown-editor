import { VokitCommand } from '@vokit-editor/core';

export const tableCommand = new VokitCommand('table', (ctx) => {
  ctx.editorEgine.insert(() => {
    const text =
      '|column1|column2|column3|\n|-|-|-|\n|content1|content2|content3|';

    return {
      text,
    };
  });
});
