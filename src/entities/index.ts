import { Profile } from './profile/model';

export class Entities {
  profile: Profile;

  constructor() {
    this.profile = new Profile();
  }
}
