import { VokitCommand } from '@vokit-editor/core';
import { modifyText } from '@vokit-editor/shared';

export interface BoldCommandParams {
  placeholder?: string;
}
export const boldCommand = new VokitCommand<[params?: BoldCommandParams]>(
  'bold',
  (ctx, params) => {
    ctx.editorEgine.insert((selectedText) => {
      const prefix = '**';
      const suffix = '**';

      return modifyText({
        selectedText,
        generator: (selectedText) => {
          const text = `${prefix}${selectedText || (params?.placeholder ?? 'Bold')}${suffix}`;

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
