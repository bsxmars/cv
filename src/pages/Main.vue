<script setup lang="ts">
import { Background, Glass, Profile, Skills, Experience, cv } from '@/entities/cv';
import { ref } from 'vue';
import { Settings } from '@/features/settings';

const color = ref('#000000');

const handleChangeColor = (newColor: string) => {
  color.value = newColor;
};
</script>

<template>
  <div class="page-wrapper">
    <Background :color="color" />

    <Settings :handleChangeColor="handleChangeColor" />

    <Glass>
      <Profile />
      <Skills />
      <Experience :data="cv.experience" />
    </Glass>
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
</style>
