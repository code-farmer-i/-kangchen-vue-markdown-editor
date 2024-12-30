<template>
  <transition name="vokit-editor-zoom-in-top">
    <ul
      class="vokit-editor__menu"
      :class="[`vokit-editor__menu--${mode}`]"
      :style="state.style"
      v-show="visible"
      @mousemove.stop
      @click.stop
      ref="root"
    >
      <template v-if="isListMode">
        <li
          v-for="item in menus"
          :key="item.name"
          class="vokit-editor__menu-item"
          :class="[`vokit-editor__menu-item-${item.name}`, item.class]"
          @click.stop="handleClick(item)"
        >
          <component :is="genRender(item.text)"></component>
        </li>
      </template>
      <template v-else>
        <li>
          <div
            v-for="rowIndex in rowCount"
            class="vokit-editor__menu-row"
          >
            <span
              v-for="item in getRowMenus(rowIndex)"
              :key="item.name"
              :style="{
                width: itemWidth
              }"
              class="vokit-editor__menu-item"
              :class="[`vokit-editor__menu-item-${item.name}`, item.class]"
              @click.stop="handleClick(item)"
            >{{ item.text }}</span>
          </div>
        </li>
      </template>
    </ul>
  </transition>
</template>

<script setup lang="ts">
import { reactive, computed, nextTick, watch, ref } from 'vue';
import { genRender } from '../../render';
import { MENU_MODE } from '@vokit-editor/shared';

import type { PropType } from 'vue';
import type { VokitToolbarBaseItem } from './toolbar';
import type { MenuMode } from '@vokit-editor/shared';

const visible = defineModel('visible', { type: Boolean, default: false });
const props = defineProps({
  mode: {
    type: String as PropType<MenuMode>,
    default: MENU_MODE.PANEL,
  },
  menus: {
    type: Array as PropType<VokitToolbarBaseItem[]>,
    default: () => []
  },
  itemWidth: {
    type: String,
    default: '30px',
  },
  rowNum: {
    type: Number,
    default: 10,
  },
});
const emit = defineEmits<{
  'item-click': [item: VokitToolbarBaseItem];
}>();
const root = ref<HTMLElement>();
const state = reactive<{ style: { left?: number; right?: number; }; }>({
  style: {
    left: 0,
  },
});

const rowCount = computed(() => {
  return Math.ceil(props.menus.length / props.rowNum);
});
const isListMode = computed(() => {
  return props.mode === MENU_MODE.LIST;
});

watch(visible, () => {
  if (visible.value) nextTick(calculateLayout);
});

const calculateLayout = () => {
  if (!root.value) return;
  // 容器右边框距离可视区域左侧的距离
  const { right } = root.value.getBoundingClientRect();
  const windowWidth = document.documentElement.clientWidth;

  if (windowWidth - right < 0) state.style = { right: 0 };
};
const getRowMenus = (rowIndex: number) => {
  const end = rowIndex * props.rowNum;
  const start = end - props.rowNum;

  return props.menus.slice(start, end);
};
const hide = () => {
  visible.value = false;
};
const handleClick = (item: VokitToolbarBaseItem) => {
  emit('item-click', item);

  hide();
};
</script>