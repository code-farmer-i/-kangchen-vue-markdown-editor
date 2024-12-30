import { VokitCommand } from '@vokit-editor/core';
import { modifyText } from '@vokit-editor/shared';

export interface OlCommandParams {
  placeholder?: string;
}
export const olCommand = new VokitCommand<[params?: OlCommandParams]>(
  'ol',
  (ctx, params) => {
    ctx.editorEgine.insert((selectedText) => {
      return modifyText({
        selectedText,
        generator: (selectedText, rowIndex) => {
          const content = selectedText || params?.placeholder || 'Ordered list';
          const text = `${rowIndex}. ${content}`;

          return {
            text,
            selection: {
              from: text.length - content.length,
              to: text.length,
            },
          };
        },
        ignoreEmptyLine: true,
      });
    });
  },
);
