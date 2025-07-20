export interface IExperience {
  id: number;
  startDate: string;
  endDate: string;
  position: string;
  company: string;
  responsibilities: string[];
}

export interface ISkill {
  id: number;
  name: string;
  level: number;
}

export interface IContact {
  type: string;
  value: string;
}

export interface IProfile {
  firstname: string;
  lastname: string;
  middlename: string;
  birthday: string;
  location: string;
  formatWoks: string;
  contacts: IContact[];
  repos: string[];
}

export interface ICv {
  profile: IProfile;
  skills: ISkill[];
  experience: IExperience[];
}
