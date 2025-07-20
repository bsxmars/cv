<script setup lang="ts">
import { computed } from 'vue';

import Chevron from '@/assets/icons/chevron.svg?raw';
import TG from '@/assets/icons/tg.svg?raw';

const ICON_MAP: Record<string, string> = {
  chevron: Chevron,
  tg: TG,
};

interface Props {
  name: keyof typeof ICON_MAP;
  size?: string;
  color?: string;
}

const props = defineProps<Props>();

const iconSvg = computed(() => {
  return ICON_MAP[props.name] || '';
});
</script>

<template>
  <div
    v-if="iconSvg"
    class="icon"
    :style="{
      width: props.size || '24px',
      height: props.size || '24px',
      color: props.color || 'currentColor',
    }"
    v-html="iconSvg"
  />
</template>

<style scoped>
.icon {
  display: inline-block;
}

.icon svg {
  display: block;
  width: 100%;
  height: 100%;
  fill: currentColor;
}
</style>
