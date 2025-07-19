<script setup lang="ts">
import Skill from './Skill.vue';

const SKILLS = [
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
];
</script>

<template>
  <div class="title">Технологии</div>
  <div class="skills-row">
    <Skill
      v-for="skill of SKILLS"
      :key="skill.id"
      :level="skill.level"
      :name="skill.name"
    />
  </div>
</template>

<style lang="scss" scoped>
@use '@/shared/styles' as *;

.title {
  margin-bottom: 1rem;
}

.skills-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
