import { VokitCommand } from '@vokit-editor/core';

export interface ImageCommandParams {
  url?: string;
  desc?: string;
  width?: string | number;
  height?: string | number;
}
export const imageCommand = new VokitCommand<[params?: ImageCommandParams]>(
  'image',
  (ctx, params) => {
    ctx.editorEgine.insert(() => {
      const url = params?.url ?? 'http://';
      const desc = params?.desc ?? 'image';
      let text = `![${desc}](${url})`;
      const style = [];

      if (params?.width) {
        style.push(`width="${String(params.width)}"`);
      }

      if (params?.height) {
        style.push(`height="${String(params.height)}"`);
      }

      if (style.length) {
        text += `{{{${style.join(' ')}}}}`;
      }

      if (!params?.url) {
        return {
          text,
          selection: {
            from: text.length - 1 - url.length,
            to: text.length - 1,
          },
        };
      }

      return {
        text,
      };
    });
  },
);
