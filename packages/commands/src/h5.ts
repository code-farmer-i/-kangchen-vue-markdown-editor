import { VokitCommand } from '@vokit-editor/core';
import { modifyText } from '@vokit-editor/shared';

export interface H5CommandParams {
  placeholder?: string;
}
export const h5Command = new VokitCommand<[params?: H5CommandParams]>(
  'h5',
  (ctx, params) => {
    ctx.editorEgine.insert((selectedText) => {
      const prefix = '#####';

      return modifyText({
        selectedText,
        generator: (selectedText) => {
          const text = `${prefix} ${selectedText || params?.placeholder || 'Heading 5'}`;

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
