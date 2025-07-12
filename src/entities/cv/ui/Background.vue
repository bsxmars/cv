<template>
  <div
    class="background-layer"
    :style="backgroundStyle"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  color?: string;
  opacity?: number;
  backgroundImage?: string;
  svgColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
  color: 'black',
  opacity: 0.9,
  backgroundImage: 'url("/grayscale.svg")',
});

const backgroundStyle = computed(() => ({
  '--bg-color': props.color,
  '--bg-opacity': props.opacity,
  '--bg-image': props.backgroundImage,
}));
</script>

<style scoped lang="scss">
.background-layer {
  position: absolute;
  width: 100%;
  height: 70%;
  bottom: 0;
  mask-image: var(--bg-image, url('/grayscale.svg'));
  mask-repeat: repeat-x;
  mask-size: auto 100%;
  opacity: var(--bg-opacity, 0.9);
  background-color: var(--bg-color, #0000);
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
  min-width: 300px;
}
</style>
