import './UiText.css';
import UiText from '../../components/UiText.vue';
// @ts-expect-error vue3-vite type
import type { Meta, StoryFn } from '@storybook/vue3-vite';

export default {
    args: {
        color: 'default',
        default: 'Текст!',
        display: '',
        line: 'lh100',
        size: 'fs16',
        text: 'Много разного текста, чтоб было понятно, что меняется, когда мы ставим тот или иной параметр. И хорошо, если этот текст поместится здесь таким образом, чтоб занимать пространство в 2, а то и в 3 строки. Потому что тогда лучше видно, как влияют параметры текста на сам текст.',
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

export const Default: StoryFn<typeof UiText> = (args: InstanceType<typeof UiText>['$props']) => ({
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
        <UiText v-bind="args" />
    `,
});

const TemplateTwoTexts: StoryFn<typeof UiText> = (args: InstanceType<typeof UiText>['$props']) => ({
    components: { UiText },
    setup() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        return { args };
    },
    template: `
        <UiText v-bind="args" />
        <UiText v-bind="args" />
    `,
});

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
export const ColorHover = Template.bind({}) as {
    args: InstanceType<typeof UiText>['$props'];
};
ColorHover.args = {
    color: 'hover',
    text: 'Текст с цветом наведения',
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
export const WeightBold = Template.bind({}) as {
    args: InstanceType<typeof UiText>['$props'];
};
WeightBold.args = {
    text: 'Жирный текст',
    weight: 'fw700',
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
export const LineHeightLarge = Template.bind({}) as {
    args: InstanceType<typeof UiText>['$props'];
};
LineHeightLarge.args = { line: 'lh150' };

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
export const DisplayBlock = TemplateTwoTexts.bind({}) as {
    args: InstanceType<typeof UiText>['$props'];
};
DisplayBlock.args = {
    display: 'block',
    text: 'Просто что-то тут написали',
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
export const SizeBig = Template.bind({}) as {
    args: InstanceType<typeof UiText>['$props'];
};
SizeBig.args = {
    size: 'fs36',
    text: 'Крупный текст',
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
export const WrapNoWrap = Template.bind({}) as {
    args: InstanceType<typeof UiText>['$props'];
};
WrapNoWrap.args = { wrap: 'nowrap' };
