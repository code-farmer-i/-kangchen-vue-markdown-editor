import { VokitCommand } from '@vokit-editor/core';
import { modifyText } from '@vokit-editor/shared';

export interface H6CommandParams {
  placeholder?: string;
}
export const h6Command = new VokitCommand<[params?: H6CommandParams]>(
  'h6',
  (ctx, params) => {
    ctx.editorEgine.insert((selectedText) => {
      const prefix = '######';

      return modifyText({
        selectedText,
        generator: (selectedText) => {
          const text = `${prefix} ${selectedText || params?.placeholder || 'Heading 6'}`;

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
