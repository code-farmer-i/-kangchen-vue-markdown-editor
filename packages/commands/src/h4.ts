import { VokitCommand } from '@vokit-editor/core';
import { modifyText } from '@vokit-editor/shared';

export interface H4CommandParams {
  placeholder?: string;
}
export const h4Command = new VokitCommand<[params?: H4CommandParams]>(
  'h4',
  (ctx, params) => {
    ctx.editorEgine.insert((selectedText) => {
      const prefix = '####';

      return modifyText({
        selectedText,
        generator: (selectedText) => {
          const text = `${prefix} ${selectedText || params?.placeholder || 'Heading 4'}`;

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
