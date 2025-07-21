import { computed, ref } from 'vue';
import { international } from '@/shared/libs/international';
import type { LangType } from '@/shared/types';

export class Profile {
  lang = ref<LangType>('eng');
  color = ref('black');

  titles = computed(() => {
    return international[this.lang.value];
  });

  setCurrentLang(value: LangType) {
    this.lang.value = value;
  }

  setCurrentColor(color: string) {
    this.color.value = color;
  }
}
