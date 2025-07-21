import { type App, createApp, inject, reactive } from 'vue';
import WebApp from '@/App.vue';
import { Entities } from '@/entities/index';
import '@/shared/styles/reset.scss';
import '@/shared/styles/fonts.scss';

export class Application {
  private vueApp: App<Element>;

  constructor(entities: any) {
    this.entities = entities;

    const vueApp = createApp(WebApp, { app: this });
    this.vueApp = vueApp;

    vueApp.provide('app', this);
  }

  run() {
    this.vueApp.mount('#app');
  }
}

export const useApp = () => {
  const app = inject<Application>('app');

  if (app == null) {
    throw new Error('useApp: hook can only be called inside Vue application');
  }

  return app;
};
