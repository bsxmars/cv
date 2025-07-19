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

export interface IProfile {
  firstname: string;
  lastname: string;
  middlename: string;
  birthday: string;
}

export interface ICv {
  profile: IProfile;
  skills: ISkill[];
  experience: IExperience[];
}
