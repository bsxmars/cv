<script setup lang="ts">
interface Props {
  title: string;
}

defineProps<Props>();
</script>

<template>
  <div class="container">
    <div class="title">{{ title }}</div>

    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/shared/styles' as *;

.container {
  margin-top: 2rem;
}

.title {
  margin-bottom: 0.5rem;
}

.content {
  padding-left: 1rem;
}
</style>
