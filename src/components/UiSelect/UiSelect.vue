<template>
  <select
    :value="props.modelValue"
    :disabled="props.isDisabled"
    :data-disabled="props.isDisabled"
    class="ui-select"
    @change="handleChange"
  >
    <option v-for="option in props.options" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<script setup lang="ts">
interface IProps {
  modelValue: string;
  isDisabled?: boolean;
  options: string[];
}

const props = withDefaults(defineProps<IProps>(), {
  options: () => [],
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;

  emit('update:modelValue', target.value);
};
</script>

<style scoped>
.ui-select {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid var(--color-border);
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;
  transition: border-color 0.2s ease;
  background-color: var(--color-white);
  color: var(--color-text);
  cursor: pointer;
}

.ui-select:focus {
  outline: none;
  border-color: var(--color-primary);
}

.ui-select[data-disabled='true'] {
  background-color: var(--color-secondary);
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
