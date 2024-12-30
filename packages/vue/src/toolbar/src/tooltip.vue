<template>
  <transition name="vokit-editor-fade-in">
    <div
      v-show="state.visible"
      :style="{
        left: `${state.position.x}px`,
        top: `${state.position.y}px`
      }"
      class="vokit-editor__tooltip"
      ref="root"
    >
      {{ text }}
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, reactive, nextTick } from 'vue';

defineProps({
  text: [String, Function]
});
const root = ref<HTMLElement>();
const state = reactive({
  position: {
    x: 0,
    y: 0,
  },
  visible: false,
});

const show = (position: { x: number; y: number; }) => {
  state.position = {
    x: position.x,
    y: position.y,
  };

  state.visible = true;

  nextTick(calculateLayout);
};
const hide = () => {
  state.visible = false;
};
const calculateLayout = () => {
  if (!root.value) return;
  // 容器右边框距离可视区域左侧的距离
  const { right } = root.value.getBoundingClientRect();
  const windowWidth = document.documentElement.clientWidth;

  if (windowWidth - right < 0) {
    state.position.x -= (right - windowWidth);
  }
};

defineExpose({
  show,
  hide
});
</script>
