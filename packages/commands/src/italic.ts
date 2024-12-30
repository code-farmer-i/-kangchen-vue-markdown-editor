import { VokitCommand } from '@vokit-editor/core';
import { modifyText } from '@vokit-editor/shared';

export interface ItalicCommandParams {
  placeholder?: string;
}
export const italicCommand = new VokitCommand<[params?: ItalicCommandParams]>(
  'italic',
  (ctx, params) => {
    ctx.editorEgine.insert((selectedText) => {
      const prefix = '*';
      const suffix = '*';

      return modifyText({
        selectedText,
        generator: (selectedText) => {
          const text = `${prefix}${selectedText || params?.placeholder || 'Italic'}${suffix}`;

          return {
            text,
            selection: {
              from: prefix.length,
              to: text.length - suffix.length,
            },
          };
        },
      });
    });
  },
);
