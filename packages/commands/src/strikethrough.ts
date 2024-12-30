import { VokitCommand } from '@vokit-editor/core';
import { modifyText } from '@vokit-editor/shared';

export interface StrikethroughCommandParams {
  placeholder?: string;
}
export const strikethroughCommand = new VokitCommand<
  [params?: StrikethroughCommandParams]
>('strikethrough', (ctx, params) => {
  ctx.editorEgine.insert((selectedText) => {
    const prefix = '~~';
    const suffix = '~~';

    return modifyText({
      selectedText,
      generator: (selectedText) => {
        const text = `${prefix}${selectedText || params?.placeholder || 'Strike'}${suffix}`;

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
});
