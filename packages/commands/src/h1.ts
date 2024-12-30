import { VokitCommand } from '@vokit-editor/core';
import { modifyText } from '@vokit-editor/shared';

export interface H1CommandParams {
  placeholder?: string;
}
export const h1Command = new VokitCommand<[params?: H1CommandParams]>(
  'h1',
  (ctx, params) => {
    ctx.editorEgine.insert((selectedText) => {
      const prefix = '#';

      return modifyText({
        selectedText,
        generator: (selectedText) => {
          const text = `${prefix} ${selectedText || params?.placeholder || 'Heading 1'}`;

          return {
            text,
            selection: {
              from: prefix.length + 1,
              to: text.length,
            },
          };
        },
      });
    });
  },
);
