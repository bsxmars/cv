<script setup lang="ts">
import { ColorPicker, LanguageSelector } from '@/shared/ui';
import type { LangType } from '@/shared/types';

interface Props {
  lang: LangType;
  color: string;
  handleChangeColor: (color: string) => void;
  handleLangChange: (value: string) => void;
}

defineProps<Props>();
</script>

<template>
  <div class="settings">
    <div class="container">
      <LanguageSelector
        class="lang"
        :lang="lang"
        @update:lang="handleLangChange"
      />

      <ColorPicker
        class="picker"
        :color="color"
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

@media (max-width: 700px) {
  .picker {
    display: none;
  }

  .settings {
    z-index: 100;
    position: absolute;
  }
}
</style>
