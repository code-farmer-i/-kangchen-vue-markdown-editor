import { VokitCommand } from '@vokit-editor/core';
import { modifyText } from '@vokit-editor/shared';

export interface LinkCommandParams {
  desc?: string;
  link?: string;
}
export const linkCommand = new VokitCommand<[params?: LinkCommandParams]>(
  'link',
  (ctx, params) => {
    ctx.editorEgine.insert((selectedText) => {
      return modifyText({
        selectedText,
        generator: () => {
          const link = params?.link ?? 'http://';
          const desc = params?.desc ?? 'Link';
          const text = `[${desc}](${link})`;

          if (!params?.link) {
            return {
              text,
              selection: {
                from: text.length - 1 - link.length,
                to: text.length - 1,
              },
            };
          }

          return {
            text,
          };
        },
      });
    });
  },
);
