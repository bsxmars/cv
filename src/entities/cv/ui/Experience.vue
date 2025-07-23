<script setup lang="ts">
import { useApp } from '@/app';
import type { IExperience } from '../types';
import { useExperienceDate } from '../lib/useExperienceDate';

interface Props {
  data: IExperience[];
}

defineProps<Props>();

const { entities } = useApp();
const titles = entities.profile.titles;
</script>

<template>
  <div class="container">
    <div class="title">
      <span>{{ titles.sections.experience }}</span>
      <slot name="title" />
    </div>

    <div class="content">
      <div
        v-for="item of data"
        :key="item.id"
        class="text"
      >
        <div class="titleBlock">
          <div class="dot" />
          <span>
            <span>
              {{ `${item.startDate} - ${item.endDate || titles.endDate}` }}
              ({{ useExperienceDate(item.startDate, item.endDate, titles.date).formattedExperience.value }}):
            </span>
            <span class="companyTitle">{{ item.company }}</span>
          </span>
        </div>

        <div class="containerInfo">
          <div class="position">
            {{ item.position }}
          </div>
          <div
            v-for="task of titles.responsibilities"
            :key="task"
            class="task"
          >
            <span>- {{ task }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/shared/styles' as *;

.container {
  margin-top: 1rem;

  &Info {
    margin-top: 0.5rem;
  }
}

.companyTitle {
  margin-left: 0.5rem;
  @include MPLUS_bold;
}

.task {
  font-size: 14px;
  margin-bottom: 0.5rem;
}

.dot {
  margin-right: 1.375rem;
}

.titleBlock {
  display: flex;
  align-items: center;
}

.position {
  margin: 0.25rem 0;
  @include MPLUS_bold;
}

.title {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.content {
  padding-left: 1rem;
}

@media (max-width: 700px) {
  .content {
    padding-left: 0;
  }

  .task {
    font-size: 13px;
  }
}
</style>
