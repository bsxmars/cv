<script setup lang="ts">
import { useApp } from '@/app';
import { Background, Glass, Profile, Skills, Experience, cv } from '@/entities/cv';
import { Settings } from '@/features/settings';
import type { LangType } from '@/shared/types';

const { entities } = useApp();

const selectedLanguage = entities.profile.lang;
const currentColor = entities.profile.color;

const handleChangeColor = (newColor: string) => {
  entities.profile.setCurrentColor(newColor);
};

const handleLangChange = (value: string) => {
  entities.profile.setCurrentLang(value as LangType);
};
</script>

<template>
  <div class="wrapper">
    <Background :color="currentColor" />

    <Settings
      :handleChangeColor="handleChangeColor"
      :handleLangChange="handleLangChange"
      :lang="selectedLanguage"
      :color="currentColor"
      class="settings"
    />

    <Glass>
      <Profile :data="cv.profile" />
      <Skills :data="cv.skills" />
      <Experience :data="cv.experience" />
    </Glass>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
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
