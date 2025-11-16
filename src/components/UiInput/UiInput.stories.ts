import { ref } from 'vue';
import { Meta, StoryObj } from '@storybook/vue3';
import { html } from '../../helpers';
import UiInput from './UiInput.vue';

const meta: Meta<typeof UiInput> = {
  component: UiInput,
  args: {
    modelValue: '',
    placeholder: 'Введите текст...',
    isDisabled: false,
  },
  argTypes: {
    isDisabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

export const Default: StoryObj<typeof UiInput> = {
  render: (args) => ({
    components: { UiInput },
    setup: () => {
      const value = ref(args.modelValue as string);

      return { args, value };
    },
    template: html`
      <UiInput v-bind="args" v-model="value" />
      <p style="margin-top: 16px;">Значение: {{ value }}</p>
    `,
  }),
};
