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
    <ColorPicker
      class="picker"
      @update:color="handleChangeColor"
    />

    <LanguageSelector v-model="selectedLanguage" />
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
