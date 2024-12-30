import { h } from 'vue';
import { VokitToolbar } from '@vokit-editor/vue';
import TocToolbarIcon from './icon.vue';

export { TocToolbarIcon };
export const tocToolbar = new VokitToolbar({
  name: 'toc',
  icon: () => h(TocToolbarIcon),
  title: '11',
  action() {},
});
