import { ref, onMounted, onUnmounted } from 'vue';

export function useClickOutside(callback?: () => void) {
  const elementRef = ref<HTMLElement>();

  const handleClickOutside = (event: Event) => {
    const target = event.target as HTMLElement;
    if (elementRef.value && !elementRef.value.contains(target)) {
      callback?.();
    }
  };

  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
  });

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
  });

  return {
    elementRef,
  };
}
