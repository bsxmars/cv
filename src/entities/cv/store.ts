import type { ICv } from './types';

export const cv: ICv = {
  profile: {
    firstname: 'Иван',
    lastname: 'Крылов',
    middlename: 'Александрович',
    birthday: '21.11.1994',
    location: 'Mосковская область, Пушкино',
    formatWoks: 'Удаленно, гибрид',
    contacts: [
      {
        type: 'телефон',
        value: '+7 977 816 43 58',
      },
      {
        type: 'telegram',
        value: '@bsx_mars',
      },
    ],
    repos: ['https://github.com/bsxmars'],
  },
  skills: [
    {
      id: 1,
      name: 'React',
      level: 2,
    },
    {
      id: 2,
      name: 'Vue',
      level: 2,
    },
    {
      id: 3,
      name: 'Next',
      level: 2,
    },
  ],
  experience: [
    {
      id: 1,
      startDate: '01.01.2020',
      endDate: '01.10.2020',
      position: 'Frontend developer',
      company: 'UBIC Technologies LLC',
      responsibilities: ['делал 1', 'делал 2', 'делал 3', 'делал 4'],
    },
  ],
};
