<script setup lang="ts">
import { ColorPicker } from '@/shared/ui';

interface Props {
  handleChangeColor: (color: string) => void;
}

defineProps<Props>();
</script>

<template>
  <div class="settings">
    <ColorPicker
      class="picker"
      @update:color="handleChangeColor"
    />
  </div>
</template>

<style scoped lang="scss">
.settings {
  position: fixed;
  top: 0;
  right: 0;
  padding: 20px;
}
</style>
