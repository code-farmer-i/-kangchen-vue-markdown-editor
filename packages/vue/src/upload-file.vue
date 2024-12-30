<template>
  <input
    type="file"
    style="display: none"
    :key="key"
    :accept="uploadConfig?.accept"
    :multiple="uploadConfig?.multiple"
    @input="handleUpload"
    ref="fileInputCtx"
  >
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { PropType, InputHTMLAttributes } from 'vue';

defineProps({
  uploadConfig: Object as PropType<Pick<InputHTMLAttributes, 'accept' | 'multiple'>>,
});

const key = ref(0);
const fileInputCtx = ref<HTMLInputElement>();

let handleUpload: (e: Event) => void;
const chooseFile = () => {
  return new Promise<InputEvent>((resolve) => {
    handleUpload = (e) => {
      resolve(e as InputEvent);

      // 解决上传同一文件不触发change事件的问题
      key.value++;
    };

    fileInputCtx.value?.click();
  });
};

defineExpose({
  async upload() {
    const event = await chooseFile();

    return event;
  }
});
</script>