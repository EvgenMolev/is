import { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { UiField, UiInput, UiSelect } from '..';
import { html } from '../../helpers';

const meta: Meta<typeof UiField> = {
  component: UiField,
  args: {
    label: 'Поле ввода',
  },
};

export default meta;

export const WithInput: StoryObj<typeof UiField> = {
  render: (args) => ({
    components: { UiField, UiInput },
    setup: () => {
      const value = ref('');

      return { args, value };
    },
    template: html`
      <UiField v-bind="args">
        <UiInput v-model="value" placeholder="Введите значение" />
      </UiField>
      <p style="margin-top: 16px;">Значение: {{ value }}</p>
    `,
  }),
};

export const WithSelect: StoryObj<typeof UiField> = {
  render: (args) => ({
    components: { UiField, UiSelect },
    setup: () => {
      const value = ref('');
      const options = ['Опция 1', 'Опция 2', 'Опция 3'];

      return { args, value, options };
    },
    template: html`
      <UiField v-bind="args">
        <UiSelect v-model="value" :options="options" />
      </UiField>
      <p style="margin-top: 16px;">Выбрано: {{ value }}</p>
    `,
  }),
};
