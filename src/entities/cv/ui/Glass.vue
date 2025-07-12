<template>
  <div class="glass">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.glass {
  position: relative;
  width: 100%;
  max-width: 700px;
  min-width: 300px;
  height: 900px;
  border-radius: 28px;
  overflow: hidden;
  z-index: 10;
  margin-top: 20px;
  padding: 25px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 0 20px rgba(255, 255, 255, 0.5);

  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.877);
  backdrop-filter: none;
  -webkit-backdrop-filter: none;

  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}
</style>
