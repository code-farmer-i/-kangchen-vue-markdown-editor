import { VokitCommand } from '@vokit-editor/core';

export interface QuoteCommandParams {
  placeholder?: string;
}
export const quoteCommand = new VokitCommand<[params?: QuoteCommandParams]>(
  'quote',
  (ctx, params) => {
    ctx.editorEgine.insert((selectedText) => {
      const prefix = '>';
      const content = selectedText || (params?.placeholder ?? 'Blockquote');
      const text = `${prefix} ${content}`;

      return {
        text,
        selection: {
          from: text.length - content.length,
          to: text.length,
        },
      };
    });
  },
);
