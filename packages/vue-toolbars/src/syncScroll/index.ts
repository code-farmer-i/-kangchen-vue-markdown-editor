import { h } from 'vue';
import { VokitToolbar } from '@vokit-editor/vue';
import SyncScrollToolbarIcon from './icon.vue';

export { SyncScrollToolbarIcon };
export const syncScrollToolbar = new VokitToolbar({
  name: 'sync-scroll',
  icon: () => h(SyncScrollToolbarIcon),
  title: '11',
  action() {},
});
