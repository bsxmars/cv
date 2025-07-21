<template>
  <div class="languageSelector">
    <button
      class="languageButton"
      @click="toggleLanguage"
    >
      {{ currentLanguage.name }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Language {
  code: string;
  name: string;
}

const props = defineProps<{
  lang: string;
}>();

const emit = defineEmits<{
  'update:lang': [value: string];
}>();

const languages: Language[] = [
  {
    code: 'ru',
    name: 'Рус',
  },
  {
    code: 'eng',
    name: 'Eng',
  },
];

const currentLanguage = computed(() => {
  return languages.find((lang) => lang.code === props.lang) || languages[0];
});

const toggleLanguage = () => {
  console.log('props.lang', props.lang);

  const currentIndex = languages.findIndex((lang) => lang.code === props.lang);
  const nextIndex = (currentIndex + 1) % languages.length;
  const nextLanguage = languages[nextIndex];
  emit('update:lang', nextLanguage.code);
};
</script>

<style scoped lang="scss">
.language {
  &Selector {
    display: inline-block;
  }

  &Button {
    padding: 8px 12px;
    background: #ffffff;
    border: 1px solid #e1e5e9;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    color: #333;
    transition: all 0.2s ease;
    min-width: 60px;

    &:hover {
      border-color: black;
      box-shadow: 0 2px 8px rgba(0, 123, 255, 0.1);
    }

    &:active {
      transform: translateY(1px);
    }
  }
}
</style>
