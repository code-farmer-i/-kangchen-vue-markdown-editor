import { h } from 'vue';
import { VokitToolbar } from '@vokit-editor/vue';
import { codeCommand } from '@vokit-editor/commands';
import CodeToolbarIcon from './icon.vue';

export { CodeToolbarIcon };
export const codeToolbar = new VokitToolbar({
  name: 'code',
  icon: () => h(CodeToolbarIcon),
  title: '11',
  action(ctx) {
    codeCommand.handler(ctx);
  },
});
