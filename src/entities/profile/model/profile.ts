import { reactive, ref, type Ref } from 'vue';
import { international } from '@/shared/libs/international';
import type { LangType } from '@/shared/types';

export class Profile {
  lang = reactive<LangType>('eng');
  color = ref('black');

  get titles() {
    return international[this.lang];
  }

  setCurrentLang(value: LangType) {
    this.lang = value;
  }

  setCurrentColor(color: string) {
    this.color.value = color;
  }
}
