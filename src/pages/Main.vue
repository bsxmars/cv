<script setup lang="ts">
import { useApp } from '@/app';
import { Background, Glass, Profile, Skills, Experience, cv } from '@/entities/cv';
import { reactive, ref } from 'vue';
import { Settings } from '@/features/settings';
import type { LangType } from '@/shared/types';

const color = ref('#000000');
const { entities } = useApp();

// selectedLanguage должен быть ref, а не строкой!
const selectedLanguage = reactive(entities.profile.lang);
const currentColor = entities.profile.color;

console.log('selectedLanguage', selectedLanguage);

const handleChangeColor = (newColor: string) => {
  entities.profile.setCurrentColor(newColor);
};

const handleLangChange = () => {
  // Используем .value для получения текущего языка
  const value = selectedLanguage.value === 'ru' ? 'eng' : 'ru';
  console.log('handleLangChange value:', value);
  entities.profile.setCurrentLang(value as LangType);
  console.log('entities.profile.lang.value after set:', entities.profile.lang);
};
</script>

<template>
  <div class="page-wrapper">
    <Background :color="color" />

    {{ selectedLanguage }}

    <button @click="handleLangChange()">111</button>

    <!-- <Settings
      :handleChangeColor="handleChangeColor"
      :handleLangChange="handleLangChange"
      :lang="selectedLanguage.value"
      :color="currentColor.value"
      class="settings"
    /> -->

    <!-- <Glass>
      <Profile :data="cv.profile" />
      <Skills :data="cv.skills" />
      <Experience :data="cv.experience" />
    </Glass> -->
  </div>
</template>

<style scoped lang="scss">
.page-wrapper {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}

.picker {
  position: fixed;
  top: 0;
  right: 0;
}

@media print {
  .settings {
    display: none;
  }
}
</style>
