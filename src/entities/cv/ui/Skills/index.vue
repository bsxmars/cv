<script setup lang="ts">
import { useApp } from '@/app';
import type { ISkill } from '../../types';
import Skill from './Skill.vue';
import { Icon, Tooltip } from '@/shared/ui';

interface Props {
  data: ISkill[];
}

defineProps<Props>();
const { entities } = useApp();
const titles = entities.profile.titles;
</script>

<template>
  <div class="container">
    <div class="title">
      <span>{{ titles.sections.skills }}</span>
      <Tooltip class="tooltip">
        <Icon
          name="info"
          class="icon"
          size="20px"
        />
        <template #content>
          <div>
            <span class="dot" />
            <span> {{ titles.tooltip.one }}</span>
          </div>

          <div>
            <span class="dot" />
            <span class="dot" />
            <span> {{ titles.tooltip.two }}</span>
          </div>

          <div>
            <span class="dot" />
            <span class="dot" />
            <span class="dot" />
            <span> {{ titles.tooltip.three }}</span>
          </div>

          <div>
            <span class="dot" />
            <span class="dot" />
            <span class="dot" />
            <span class="dot" />
            <span> {{ titles.tooltip.four }}</span>
          </div>
        </template>
      </Tooltip>
    </div>

    <div class="content">
      <div class="skillsRow">
        <Skill
          v-for="skill of data"
          :key="skill.id"
          :level="skill.level"
          :name="skill.name"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/shared/styles' as *;

.skillsRow {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.title {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.content {
  padding-left: 1rem;
}

.icon {
  margin-left: 0.5rem;
  margin-bottom: 0.125rem;
  cursor: pointer;
}

@media print {
  .tooltip {
    display: none;
  }
}
</style>
