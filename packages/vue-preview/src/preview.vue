<template>
  <div
    class="vokit-editor-preview"
    :style="{
      tabSize,
      '-moz-tab-size': tabSize,
      '-o-tab-size': tabSize
    }"
    @click="handlePreviewClick"
    ref="root"
  >
    <div v-html="html" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { usePreview } from './use-preview';
import { previewProps } from './preview';
import { LINE_MARKUP, ANCHOR_MARKUP, HEADING_MARKUP } from '@vokit-editor/shared';
import type { PreviewEmits } from './preview';

const props = defineProps(previewProps);
const emit = defineEmits<PreviewEmits>();
const { root, handlePreviewClick } = usePreview({
  lineMarkup: LINE_MARKUP,
  anchorMarkup: ANCHOR_MARKUP,
  headingMarkup: HEADING_MARKUP,
  onImageClick(images, imagePreviewInitIndex) {
    emit('image-click', images, imagePreviewInitIndex);
  }
});
const html = ref('');

watch(() => props.text, () => {
  html.value = props.editor?.parse(props.text) || '';
}, {
  immediate: true
});
</script>