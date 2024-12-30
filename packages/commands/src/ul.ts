import { VokitCommand } from '@vokit-editor/core';
import { modifyText } from '@vokit-editor/shared';

export interface UlCommandParams {
  placeholder?: string;
}
export const ulCommand = new VokitCommand<[params?: UlCommandParams]>(
  'ul',
  (ctx, params) => {
    ctx.editorEgine.insert((selectedText) => {
      return modifyText({
        selectedText,
        generator: (selectedText) => {
          const content =
            selectedText || params?.placeholder || 'Unordered list';
          const text = `- ${content}`;

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
