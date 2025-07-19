<script setup lang="ts">
import type { IExperience } from '../types';

interface Props {
  data: IExperience[];
}

defineProps<Props>();
</script>

<template>
  <div class="container">
    <div class="title">Опыт</div>

    <div
      v-for="item of data"
      :key="item.id"
      class="text"
    >
      <div class="containerBlock">
        <div class="titleBlock">
          <div class="dot" />
          <span>
            {{ `${item.startDate} - ${item.endDate}: ` }}
            <span class="companyTitle">{{ item.company }}</span>
          </span>
        </div>

        <div class="containerInfo">
          <div class="position">{{ item.position }}</div>
          <div
            v-for="task of item.responsibilities"
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
    padding-left: 2rem;
  }

  &Block {
    padding-left: 1rem;
  }
}

.companyTitle {
  margin-left: 1rem;
  @include MPLUS_bold;
}

.task {
  font-size: 12px;
}

.title {
  margin-bottom: 1rem;
}

.dot {
  margin-right: 1.375rem;
}

.titleBlock {
  display: flex;
  align-items: center;
}

.position {
  margin: 0.5rem 0;
  @include MPLUS_bold;
}
</style>
