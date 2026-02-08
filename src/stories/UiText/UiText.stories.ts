import './UiText.css';
import UiText from '../../components/UiText.vue';
// @ts-expect-error vue3-vite type
import type { Meta, StoryFn } from '@storybook/vue3-vite';

export default {
    args: {
        color: 'default',
        display: '',
        line: 'lh100',
        size: 'fs16',
        text: 'Обычный текст',
        weight: 'fw400',
        wrap: '',
    },
    argTypes: {
        color: {
            control: { type: 'radio' },
            options: ['default', 'hover', 'active', 'secondary'],
        },
        display: {
            control: { type: 'radio' },
            options: ['block', 'inline', 'flex', ''],
        },
        line: {
            control: { type: 'select' },
            options: ['lh100', 'lh110', 'lh120', 'lh130', 'lh140', 'lh150'],
        },
        size: {
            control: { type: 'select' },
            options: ['fs12', 'fs14', 'fs16', 'fs18', 'fs20', 'fs24', 'fs36'],
        },
        text: { control: { type: 'text' } },
        weight: {
            control: { type: 'radio' },
            options: ['fw400', 'fw500', 'fw600', 'fw700'],
        },
        wrap: {
            control: { type: 'radio' },
            options: ['nowrap', 'balance', ''],
        },
    },
    component: UiText,
    tags: ['autodocs'],
    title: 'UiText',
} as Meta<typeof UiText>;

export const DefaultUiText: StoryFn<typeof UiText> = (args: InstanceType<typeof UiText>['$props']) => ({
    components: { UiText },
    setup() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        return { args };
    },
    template: '<UiText v-bind="args" />',
});

const Template: StoryFn<typeof UiText> = (args: InstanceType<typeof UiText>['$props']) => ({
    components: { UiText },
    setup() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        return { args };
    },
    template: `
        <div style="display: flex; flex-direction: row; gap: 12px;">
        <UiText v-bind="args" />
        </div>
    `,
});

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
export const HoverUiText = Template.bind({}) as {
    args: InstanceType<typeof UiText>['$props'];
};
HoverUiText.args = {
    color: 'hover',
    text: 'Текст с наведением',
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
export const BoldUiText = Template.bind({}) as {
    args: InstanceType<typeof UiText>['$props'];
};
BoldUiText.args = {
    text: 'Жирный текст',
    weight: 'fw700',
};
