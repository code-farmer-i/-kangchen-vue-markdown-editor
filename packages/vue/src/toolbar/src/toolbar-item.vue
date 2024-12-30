<template>
  <li
    class="vokit-editor__toolbar-item"
    :class="[
      `vokit-editor__toolbar-item-${name}`,
      {
        'vokit-editor__toolbar-item--active': active || menuActive
      },
      {
        'vokit-editor__toolbar-item--menu': !!menu
      }
    ]"
    @mousedown.prevent
    @mouseleave="handleHideTooltip"
    @mousemove="showTooltip"
    @click.stop="handleClick"
    ref="root"
  >
    <component :is="genRender(icon || text)"></component>
    <VokitTooltip
      ref="tooltip"
      :text="title"
    />
    <VokitMenu
      v-if="menu"
      ref="menu"
      :mode="menu.mode"
      :menus="menuItems"
      :item-width="menu.itemWidth"
      :row-num="menu.rowNum"
      :visible="menuActive"
      @update:visible="menuActive = $event"
      @item-click="emit('menu-click', $event)"
    />
    <ArrowDownIcon
      v-if="menu"
      class="vokit-editor__menu-ctrl"
      ref="menuCtrl"
    />
  </li>
</template>

<script setup lang="ts">
import { ref, computed, PropType } from 'vue';
import VokitTooltip from './tooltip.vue';
import VokitMenu from './menu.vue';
import { genRender } from '../../render';
import { onClickOutside } from '@vueuse/core';
import ArrowDownIcon from '../../icons/arrow-down.vue';
import type { VokitToolbarBaseItem, VokitToolbarConfig } from './toolbar';

const props = defineProps({
  name: String,
  title: [String, Function],
  active: [Boolean, Function],
  text: [String, Function],
  icon: [String, Function],
  menu: Object as PropType<VokitToolbarConfig['menu']>,
  disabledMenus: Array,
});
const emit = defineEmits<{
  click: [e: MouseEvent];
  'menu-click': [menu: VokitToolbarBaseItem];
}>();
const root = ref<HTMLElement>();
const tooltip = ref<InstanceType<typeof VokitTooltip>>();
const menuCtrl = ref<HTMLElement>();
const menuActive = ref(false);

const menuItems = computed(() => {
  return props.menu?.items.filter(
    ({ name: menuName }) => !props.disabledMenus?.includes(`${props.name}/${menuName}`)
  );
});

const hideMenu = () => {
  menuActive.value = false;
};
const showMenu = () => {
  menuActive.value = true;
};
const handleClick = (e: MouseEvent) => {
  emit('click', e);
  if (menuActive.value) {
    hideMenu();
  } else {
    showMenu();
  };

  if (props.menu) {
    handleHideTooltip();
  } else {
    showTooltip(e);
  }
};
let timmer: number;
const showTooltip = (e: MouseEvent) => {
  if (timmer) clearTimeout(timmer);

  if (!root.value) return;
  const selfElRect = root.value.getBoundingClientRect();
  const x = e.clientX - selfElRect.left;
  const y = e.clientY - selfElRect.top;

  timmer = window.setTimeout(() => {
    tooltip.value?.show({
      x: x - 2,
      y: y + 20,
    });
  }, 100);
};
const handleHideTooltip = () => {
  if (timmer) clearTimeout(timmer);

  tooltip.value?.hide();
};

onClickOutside(root, hideMenu);
</script>
