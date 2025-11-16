<template>
  <button
    :type="props.type"
    :disabled="props.isDisabled"
    :data-layout="props.layout"
    :data-disabled="props.isDisabled"
    class="ui-button"
    @click="handleClick"
  >
    <slot>Кнопка</slot>
  </button>
</template>

<script setup lang="ts">
interface IProps {
  layout?: 'primary' | 'secondary';
  isDisabled?: boolean;
  type?: 'submit' | 'button';
}

const props = withDefaults(defineProps<IProps>(), {
  layout: 'primary',
  type: 'button',
});

const emit = defineEmits<{
  click: [];
}>();

const handleClick = () => {
  if (!props.isDisabled) {
    emit('click');
  }
};
</script>

<style scoped>
.ui-button {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
}

.ui-button[data-layout='primary'] {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.ui-button[data-layout='primary']:hover:not([data-disabled='true']) {
  background-color: var(--color-primary-dark);
}

.ui-button[data-layout='secondary'] {
  background-color: var(--color-secondary);
  color: var(--color-text);
  border: 2px solid var(--color-border);
}

.ui-button[data-layout='secondary']:hover:not([data-disabled='true']) {
  background-color: var(--color-secondary-dark);
}

.ui-button[data-disabled='true'] {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
