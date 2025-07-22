import type { Ref } from 'vue';
import { isAllowedLang, isHexColor } from '../lib';

type Settings = {
  lang: Ref<string>;
  color: Ref<string>;
};

export class SettingsManager {
  private settings: Settings;
  private storageKey = 'app_settings';

  constructor(settings: Settings) {
    this.settings = settings;
    this.loadFromLocalStorage();
    this.updateUrl();
  }

  public setLang(lang: string) {
    if (!isAllowedLang(lang)) {
      console.warn(`SettingsManager: Invalid lang value: ${lang}`);
      return;
    }
    this.settings.lang.value = lang;
    this.saveToLocalStorage();
    this.updateUrl();
  }

  public setColor(color: string) {
    if (!isHexColor(color)) {
      console.warn(`SettingsManager: Invalid color value: ${color}`);
      return;
    }
    this.settings.color.value = color;
    this.saveToLocalStorage();
    this.updateUrl();
  }

  private loadFromLocalStorage() {
    const savedSettings = localStorage.getItem(this.storageKey);
    if (savedSettings) {
      try {
        const { lang, color } = JSON.parse(savedSettings);
        if (isAllowedLang(lang)) {
          this.settings.lang.value = lang;
        }
        if (isHexColor(color)) {
          this.settings.color.value = color;
        }
      } catch (e) {
        console.warn('SettingsManager: Failed to parse localStorage settings', e);
      }
    }
  }

  private saveToLocalStorage() {
    const settingsToSave = {
      lang: this.settings.lang.value,
      color: this.settings.color.value,
    };
    localStorage.setItem(this.storageKey, JSON.stringify(settingsToSave));
  }

  private updateUrl() {
    const params = new URLSearchParams(window.location.search);
    if (isAllowedLang(this.settings.lang.value)) {
      params.set('lang', this.settings.lang.value);
    }
    if (isHexColor(this.settings.color.value)) {
      params.set('color', this.settings.color.value);
    }
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
  }
}
