<template>
  <input
    :value="props.modelValue"
    :disabled="props.isDisabled"
    :placeholder="props.placeholder"
    :data-disabled="props.isDisabled"
    class="ui-input"
    @input="handleInput"
  />
</template>

<script setup lang="ts">
interface IProps {
  modelValue: string;
  isDisabled?: boolean;
  placeholder?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  placeholder: '',
});

// Исправленная строка - убраны квадратные скобки и добавлен правильный синтаксис
const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;

  emit('update:modelValue', target.value);
};
</script>

<style scoped>
.ui-input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid var(--color-border);
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;
  transition: border-color 0.2s ease;
  background-color: var(--color-white);
  color: var(--color-text);
}

.ui-input:focus {
  outline: none;
  border-color: var(--color-primary);
}

.ui-input[data-disabled='true'] {
  background-color: var(--color-secondary);
  cursor: not-allowed;
  opacity: 0.6;
}

.ui-input::placeholder {
  color: var(--color-text-light);
}
</style>
