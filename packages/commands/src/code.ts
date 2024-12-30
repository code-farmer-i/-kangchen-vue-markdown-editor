import { VokitCommand } from '@vokit-editor/core';

export interface CodeCommandParams {
  defaultLanguage?: string;
}
export const codeCommand = new VokitCommand<[params?: CodeCommandParams]>(
  'code',
  (ctx, params) => {
    ctx.editorEgine.insert((selectedText) => {
      const prefix = '```';
      const defaultLanguage = params?.defaultLanguage || 'language';
      const suffix = '```';

      const text = `${prefix}${defaultLanguage}\n${selectedText ? `${selectedText}\n` : ''}${suffix}`;

      return {
        text,
        selection: {
          from: prefix.length,
          to: prefix.length + defaultLanguage.length,
        },
      };
    });
  },
);
