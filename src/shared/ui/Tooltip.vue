<script setup lang="ts">
import { ref } from 'vue';

const show = ref(false);
</script>

<template>
  <div
    class="wrapper"
    @mouseenter="show = true"
    @mouseleave="show = false"
  >
    <slot />
    <div
      v-if="show"
      class="content"
    >
      <slot name="content" />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  display: inline-flex;
}

.content {
  position: absolute;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid black;
  color: black;
  background-color: white;
  padding: 6px 12px;
  border-radius: 6px;
  white-space: wrap;
  font-size: 10px;
  z-index: 10;
  width: 220px;
  pointer-events: none;
  transition: opacity 0.2s;
}
</style>
