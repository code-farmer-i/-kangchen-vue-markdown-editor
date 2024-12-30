<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { VokitEditorEgine, VokitEditorCore } from '@vokit-editor/core';
import { provideEditor } from '../../composables/useEditor';
import { configProviderProps } from './configProvider';

const props = defineProps(configProviderProps);
const editorEgine = props.editorEgnie ?? new VokitEditorEgine();
const editorCore = props.editorCore ?? new VokitEditorCore();

provideEditor({ editorEgine, editorCore });
</script>