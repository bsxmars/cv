<script setup lang="ts">
import { ColorPicker, LanguageSelector } from '@/shared/ui';
import { ref } from 'vue';

interface Props {
  handleChangeColor: (color: string) => void;
}

const selectedLanguage = ref('ru');

defineProps<Props>();
</script>

<template>
  <div class="settings">
    <div class="container">
      <LanguageSelector v-model="selectedLanguage" />

      <ColorPicker
        class="picker"
        @update:color="handleChangeColor"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.settings {
  position: fixed;
  top: 0;
  right: 0;
  padding: 20px;
}

.container {
  display: flex;
  align-items: center;
}

.picker {
  margin-left: 1rem;
}
</style>
