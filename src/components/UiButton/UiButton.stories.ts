import { Meta, StoryObj } from '@storybook/vue3';
import { UiButton } from '..';
import { html } from '../../helpers';

const meta: Meta<typeof UiButton> = {
  component: UiButton,
  args: {
    layout: 'primary',
    isDisabled: false,
    type: 'button',
  },
  argTypes: {
    layout: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
    isDisabled: {
      control: { type: 'boolean' },
    },
    type: {
      options: ['button', 'submit'],
      control: { type: 'select' },
    },
  },
};

export default meta;

export const Primary: StoryObj<typeof UiButton> = {
  render: (args) => ({
    components: { UiButton },
    setup: () => ({ args }),
    template: html`<UiButton v-bind="args">Кнопка</UiButton>`,
  }),
};

export const Secondary: StoryObj<typeof UiButton> = {
  render: (args) => ({
    components: { UiButton },
    setup: () => ({ args }),
    template: html`<UiButton v-bind="args">Вторая кнопка</UiButton>`,
  }),
  args: {
    layout: 'secondary',
  },
};
