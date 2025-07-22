import { ref, computed } from 'vue';
import { international } from '@/shared/lib';
import type { LangType } from '@/shared/types';
import { SettingsManager } from '@/features/settings';

export class Profile {
  lang = ref<LangType>('eng');
  color = ref('black');
  private settingsManager: SettingsManager;

  constructor() {
    this.settingsManager = new SettingsManager({
      lang: this.lang,
      color: this.color,
    });
  }

  titles = computed(() => {
    return international[this.lang.value];
  });

  setCurrentLang(value: LangType) {
    this.settingsManager.setLang(value);
  }

  setCurrentColor(color: string) {
    this.settingsManager.setColor(color);
  }
}
