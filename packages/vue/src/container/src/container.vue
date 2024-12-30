<template>
  <div
    class="vokit-editor"
    :class="[
      `vokit-editor--${mode}`,
      {
        'vokit-editor--fullscreen': fullscreen,
        'vokit-editor--left-area-reverse': leftAreaReverse
      }
    ]"
    :style="{ height: heightGetter }"
  >
    <div
      v-show="!isPreviewMode"
      class="vokit-editor__left-area"
      :style="{
        width: leftAreaVisible ? leftAreaWidth : 0,
        borderWidth: leftAreaVisible ? '1px' : 0
      }"
    >
      <div
        class="vokit-editor__left-area-title"
        :style="{
          height: `${toolbarHeight}px`,
          lineHeight: `${toolbarHeight}px`,
        }"
      >
        {{ leftAreaTitle }}
      </div>
      <div class="vokit-editor__left-area-body">
        <slot name="left-area" />
      </div>
    </div>
    <div class="vokit-editor__right-area">
      <div
        v-show="!isPreviewMode"
        class="vokit-editor__toolbar"
        ref="toolbarWrapper"
      >
        <div class="vokit-editor__toolbar-left-wrapper">
          <slot name="left-toolbar">
            <VokitEditorToolbar
              class="vokit-editor__toolbar-left"
              :groups="leftToolbarGroup"
              :toolbars="toolbars"
              :disabled-menus="disabledMenus"
              @item-click="handleToolbarItemClick"
              @toolbar-menu-click="handleToolbarMenuClick"
            />
          </slot>
        </div>
        <div class="vokit-editor__toolbar-right-wrapper">
          <slot name="right-toolbar">
            <VokitEditorToolbar
              class="vokit-editor__toolbar-right"
              :groups="rightToolbarGroup"
              :toolbars="toolbars"
              :disabled-mens="disabledMenus"
              @item-click="handleToolbarItemClick"
              @toolbar-menu-click="handleToolbarMenuClick"
            />
          </slot>
        </div>
      </div>
      <div class="vokit-editor__main">
        <div
          ref="editorWrapper"
          class="vokit-editor__editor-wrapper"
          v-show="!isPreviewMode"
          @click="handleEditorWrapperClick"
        >
          <ElScrollbar v-if="editorScroller">
            <slot name="editor" />
          </ElScrollbar>
          <slot
            v-else
            name="editor"
          />
        </div>
        <div
          v-show="!isEditMode"
          class="vokit-editor__preview-wrapper"
          ref="previewWrapper"
        >
          <ElScrollbar v-if="previewScroller">
            <slot name="preview" />
          </ElScrollbar>
          <slot
            v-else
            name="preview"
          />
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { VokitEditorToolbar } from '../../toolbar';
import { useResizeObserver } from '@vueuse/core';
import { containerProps } from './container';
import { ElScrollbar, provideGlobalConfig } from 'element-plus';
import { EDITOR_MODE } from '@vokit-editor/shared';
// Types
import type { VokitToolbar, VokitToolbarBaseItem } from '../../toolbar';
import type { ContainerEmits } from './container';

provideGlobalConfig({
  namespace: 've'
});

const props = defineProps(containerProps);
const emit = defineEmits<ContainerEmits>();
const toolbarWrapper = ref<HTMLElement>();
const editorWrapper = ref<HTMLElement>();
const toolbarHeight = ref(0);

useResizeObserver(editorWrapper, () => {
  emit('resize');
});
useResizeObserver(toolbarWrapper, () => {
  toolbarHeight.value = toolbarWrapper.value?.offsetHeight ?? 0;
});

const isEditMode = computed(() => {
  return props.mode === EDITOR_MODE.EDIT;
});
const isPreviewMode = computed(() => {
  return props.mode === EDITOR_MODE.PREVIEW;
});
const heightGetter = computed(() => {
  return props.fullscreen ? 'auto' : props.height;
});
const leftToolbarGroup = computed(() => {
  return getToolbarGroup(props.leftToolbar);
});
const rightToolbarGroup = computed(() => {
  return getToolbarGroup(props.rightToolbar);
});

const getToolbarGroup = (toolbarPosition: string) => {
  return toolbarPosition
    .split('|')
    .map((group) =>
      group.split(' ').filter((toolbarName) => toolbarName && props.toolbars[toolbarName])
    );
};

const handleEditorWrapperClick = (e: MouseEvent) => {
  emit('editor-wrapper-click', e);
};
const handleToolbarItemClick = (toolbar: VokitToolbar) => {
  emit('toolbar-item-click', toolbar);
};
const handleToolbarMenuClick = (menu: VokitToolbarBaseItem) => {
  emit('toolbar-menu-click', menu);
};
</script>
