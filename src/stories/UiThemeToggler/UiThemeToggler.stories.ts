import './UiThemeToggler.css';
import { UiFlex, UiThemeToggler } from '@/components';
// @ts-expect-error vue3-vite type
import type { Meta, StoryFn } from '@storybook/vue3-vite';

export default {
    args: {
        isSavedDarkMode: false,
        modelValue: false,
    },
    argTypes: { isSavedDarkMode: { control: { type: 'boolean' } } },
    component: UiThemeToggler,
    tags: ['autodocs'],
    title: 'UiThemeToggler',
} as Meta<typeof UiThemeToggler>;

const Template: StoryFn<typeof UiThemeToggler> = (args: InstanceType<typeof UiThemeToggler>['$props']) => ({
    components: {
        UiFlex,
        UiThemeToggler,
    },
    setup() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        return { args };
    },
    template: '<UiFlex style="height: 40px;"><UiThemeToggler v-bind="args" /></UiFlex>',
});

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
export const Default = Template.bind({}) as {
    args: InstanceType<typeof UiThemeToggler>['$props'];
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
export const Toggled = Template.bind({}) as {
    args: InstanceType<typeof UiThemeToggler>['$props'];
};
Toggled.args = { modelValue: true };

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
export const SavedDarkMode = Template.bind({}) as {
    args: InstanceType<typeof UiThemeToggler>['$props'];
};
SavedDarkMode.args = {
    isSavedDarkMode: true,
    modelValue: true,
};
