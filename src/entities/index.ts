import { reactive } from 'vue';
import { Profile } from './profile/model';

export class Entities {
  profile: ReturnType<typeof reactive<Profile>>;

  constructor() {
    this.profile = reactive(new Profile());
  }
}
