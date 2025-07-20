<script setup lang="ts">
import type { ISkill } from '../../types';
import Skill from './Skill.vue';
import Container from '../Container.vue';

interface Props {
  data: ISkill[];
}

defineProps<Props>();
</script>

<template>
  <Container title="Технологии">
    <div class="skillsRow">
      <Skill
        v-for="skill of data"
        :key="skill.id"
        :level="skill.level"
        :name="skill.name"
      />
    </div>
  </Container>
</template>

<style lang="scss" scoped>
.skillsRow {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
