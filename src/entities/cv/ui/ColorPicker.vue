<template>
  <input
    type="color"
    :value="color"
    class="color-picker"
    @input="handleColorChange"
  />
</template>

<script setup lang="ts">
interface Props {
  color?: string;
}

withDefaults(defineProps<Props>(), {
  color: '#000000',
});

const emit = defineEmits<{
  'update:color': [value: string];
}>();

const handleColorChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:color', target.value);
};
</script>

<style scoped lang="scss">
$border-radius: 12px;

.color-picker {
  width: 50px;
  height: 25px;
  border: none;
  border-radius: $border-radius;
  cursor: pointer;
  background: none;

  &::-webkit-color-swatch-wrapper {
    border-radius: $border-radius;
    padding: 0;
  }

  &::-webkit-color-swatch {
    border: none;
    border-radius: $border-radius;
  }

  &::-moz-color-swatch {
    border: none;
    border-radius: $border-radius;
  }

  &::-webkit-calendar-picker-indicator {
    border-radius: $border-radius;
  }

  &::-moz-color-swatch {
    border-radius: $border-radius;
  }
}
</style>
