import { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { UiSelect } from '..';
import { html } from '../../helpers';

const meta: Meta<typeof UiSelect> = {
  component: UiSelect,
  args: {
    modelValue: '',
    options: ['Опция 1', 'Опция 2', 'Опция 3'],
    isDisabled: false,
  },
  argTypes: {
    isDisabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

export const Default: StoryObj<typeof UiSelect> = {
  render: (args) => ({
    components: { UiSelect },
    setup: () => {
      const value = ref(args.modelValue);

      return { args, value };
    },
    template: html`
      <UiSelect v-bind="args" v-model="value" />
      <p style="margin-top: 16px;">Выбрано: {{ value }}</p>
    `,
  }),
};
