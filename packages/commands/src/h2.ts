import { VokitCommand } from '@vokit-editor/core';
import { modifyText } from '@vokit-editor/shared';

export interface H2CommandParams {
  placeholder?: string;
}
export const h2Command = new VokitCommand<[params?: H2CommandParams]>(
  'h2',
  (ctx, params) => {
    ctx.editorEgine.insert((selectedText) => {
      const prefix = '##';

      return modifyText({
        selectedText,
        generator: (selectedText) => {
          const text = `${prefix} ${selectedText || params?.placeholder || 'Heading 2'}`;

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
