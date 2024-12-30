<template>
  <ul v-if="groups.length">
    <template v-for="(group, idx) in groups">
      <ToolbarItem
        v-for="toolbarName in group"
        :key="toolbarName"
        :name="toolbarName"
        :class="toolbars[toolbarName].config.class"
        :title="toolbars[toolbarName].config.title"
        :icon="toolbars[toolbarName].config.icon"
        :text="toolbars[toolbarName].config.text"
        :menu="toolbars[toolbarName].config.menu"
        :disabled-menus="disabledMenus"
        @click="emit('item-click', toolbars[toolbarName])"
        @menu-click="emit('toolbar-menu-click', $event)"
      />
      <li
        v-if="idx !== groups.length - 1"
        class="vokit-editor__toolbar-divider"
      />
    </template>
  </ul>
</template>

<script setup lang="ts">
import ToolbarItem from './toolbar-item.vue';
import { toolbarProps } from './toolbar';
import type { VokitToolbar, VokitToolbarBaseItem } from './toolbar';

defineProps(toolbarProps);
const emit = defineEmits<{
  'item-click': [item: VokitToolbar];
  'toolbar-menu-click': [menu: VokitToolbarBaseItem];
}>();
</script>
