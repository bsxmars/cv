<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  level: number;
  name: string;
}>();

const dots = computed(() => Array.from({ length: 4 }, (_, i) => i < props.level));
</script>

<template>
  <div class="block">
    <div class="name">{{ name }}</div>
    <div class="dots-grid">
      <div
        v-for="(active, idx) in dots"
        :key="idx"
        class="dot"
        :class="{ active }"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/shared/styles' as *;

.name {
  @include MPLUS_bold;
}

.block {
  border: 2px solid black;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  gap: 0.75rem;
}

.dots-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 4px;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #d9d6d6;
}

.dot.active {
  background: #111;
  border-color: #111;
}
</style>
