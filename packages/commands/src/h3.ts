import { VokitCommand } from '@vokit-editor/core';
import { modifyText } from '@vokit-editor/shared';

export interface H3CommandParams {
  placeholder?: string;
}
export const h3Command = new VokitCommand<[params?: H3CommandParams]>(
  'h3',
  (ctx, params) => {
    ctx.editorEgine.insert((selectedText) => {
      const prefix = '###';

      return modifyText({
        selectedText,
        generator: (selectedText) => {
          const text = `${prefix} ${selectedText || params?.placeholder || 'Heading 3'}`;

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
