import './UiLoader.css';
import { UiFlex, UiLoader } from '@/components';
// @ts-expect-error vue3-vite type
import type { Meta, StoryFn } from '@storybook/vue3-vite';

export default {
    args: {
        isSavedDarkMode: false,
        modelValue: false,
    },
    argTypes: {
        height: { control: { type: 'number' } },
        width: { control: { type: 'number' } },
    },
    component: UiLoader,
    tags: ['autodocs'],
    title: 'UiLoader',
} as Meta<typeof UiLoader>;

const Template: StoryFn<typeof UiLoader> = (args: InstanceType<typeof UiLoader>['$props']) => ({
    components: {
        UiFlex,
        UiLoader,
    },
    setup() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        return { args };
    },
    template: '<UiFlex align-items="center" style="height: 120px;"><UiLoader v-bind="args" /></UiFlex>',
});

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
export const Default = Template.bind({}) as {
    args: InstanceType<typeof UiLoader>['$props'];
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
export const Small = Template.bind({}) as {
    args: InstanceType<typeof UiLoader>['$props'];
};
Small.args = { width: 24 };

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
export const Big = Template.bind({}) as {
    args: InstanceType<typeof UiLoader>['$props'];
};
Big.args = { width: 100 };
