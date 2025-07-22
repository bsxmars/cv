import { computed } from 'vue';
import { dayjs } from '@/shared/lib';

export const useExperienceDate = (startDate: string, endDate?: string, titles?: { year: string; month: string }) => {
  const getFormattedDate = (date: dayjs.Dayjs) => {
    const years = date.year() - 1970;
    const months = date.month();

    let result = '';

    if (years > 0) {
      result += `${years} ${titles?.year} `;
    }
    if (months > 0) {
      result += `${months} ${titles?.month}`;
    }
    return result.trim();
  };

  const formattedExperience = computed(() => {
    const start = dayjs(startDate, 'DD.MM.YYYY');
    const end = endDate ? dayjs(endDate, 'DD.MM.YYYY') : dayjs();

    const diff = end.diff(start);
    const diffDate = dayjs(diff);

    return getFormattedDate(diffDate);
  });

  return {
    formattedExperience,
  };
};
