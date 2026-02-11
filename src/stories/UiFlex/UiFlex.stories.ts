import './UiFlex.css';
import { UiFlex } from '@/components';
// @ts-expect-error vue3-vite type
import type { Meta, StoryFn } from '@storybook/vue3-vite';

export default {
    args: {
        alignContent: '',
        alignItems: 'center',
        alignSelf: '',
        bg: '',
        borderColor: 'secondary',
        colGap: '',
        direction: '',
        gap: 'g16',
        grow: false,
        height: '',
        justifyContent: 'center',
        justifyItems: '',
        justifySelf: '',
        padding: 'p16',
        paddingBlock: '',
        paddingInline: '',
        position: '',
        radius: 'r16',
        rowGap: '',
        tag: 'div',
        width: '',
        wrap: '',
    },
    argTypes: {
        alignContent: {
            control: { type: 'select' },
            options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch', 'normal', 'space-between', 'space-around', 'space-evenly', ''],
        },
        alignItems: {
            control: { type: 'select' },
            options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch', ''],
        },
        alignSelf: {
            control: { type: 'select' },
            options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch', 'auto', ''],
        },
        bg: {
            control: { type: 'select' },
            options: ['default', 'secondary', 'accent', 'surface', 'muted', 'quiet', ''],
        },
        borderColor: {
            control: { type: 'select' },
            options: ['default', 'secondary', 'accent', 'muted', ''],
        },
        colGap: {
            control: { type: 'select' },
            options: ['g2', 'g4', 'g6', 'g8', 'g10', 'g12', 'g16', 'g20', 'g24', 'g28', 'g32', 'g36', 'g40', 'g48', 'g56', 'g60', 'g64', 'g80', 'g120', ''],
        },
        direction: {
            control: { type: 'radio' },
            options: ['col', 'reverse', 'col-reverse', ''],
        },
        gap: {
            control: { type: 'select' },
            options: ['g2', 'g4', 'g6', 'g8', 'g10', 'g12', 'g16', 'g20', 'g24', 'g28', 'g32', 'g36', 'g40', 'g48', 'g56', 'g60', 'g64', 'g80', 'g120', ''],
        },
        grow: { control: { type: 'boolean' } },
        height: {
            control: { type: 'radio' },
            options: ['hfull', ''],
        },
        justifyContent: {
            control: { type: 'select' },
            options: ['flex-start', 'flex-end', 'center', 'stretch', 'normal', 'space-between', 'space-around', 'space-evenly', ''],
        },
        justifyItems: {
            control: { type: 'select' },
            options: ['flex-start', 'flex-end', 'center', 'stretch', ''],
        },
        justifySelf: {
            control: { type: 'select' },
            options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch', 'auto', ''],
        },
        padding: {
            control: { type: 'select' },
            options: ['p2', 'p4', 'p6', 'p8', 'p10', 'p12', 'p14', 'p16', 'p18', 'p20', 'p24', 'p28', 'p32', 'p36', 'p40', 'p42', 'p64', 'p80', 'p120', ''],
        },
        paddingBlock: {
            control: { type: 'select' },
            options: ['p2', 'p4', 'p6', 'p8', 'p10', 'p12', 'p14', 'p16', 'p18', 'p20', 'p24', 'p28', 'p32', 'p36', 'p40', 'p42', 'p64', 'p80', 'p120', ''],
        },
        paddingInline: {
            control: { type: 'select' },
            options: ['p2', 'p4', 'p6', 'p8', 'p10', 'p12', 'p14', 'p16', 'p18', 'p20', 'p24', 'p28', 'p32', 'p36', 'p40', 'p42', 'p64', 'p80', 'p120', ''],
        },
        position: {
            control: { type: 'select' },
            options: ['relative', 'absolute', 'sticky', 'fixed', ''],
        },
        radius: {
            control: { type: 'select' },
            options: ['r0', 'r2', 'r4', 'r6', 'r8', 'r12', 'r14', 'r16', 'r18', 'r20', 'r22', 'r24', 'r26', 'r28', 'r30', 'r32', ''],
        },
        rowGap: {
            control: { type: 'select' },
            options: ['g2', 'g4', 'g6', 'g8', 'g10', 'g12', 'g16', 'g20', 'g24', 'g28', 'g32', 'g36', 'g40', 'g48', 'g56', 'g60', 'g64', 'g80', 'g120', ''],
        },
        tag: { control: { type: 'string' } },
        width: {
            control: { type: 'radio' },
            options: ['wfull', ''],
        },
        wrap: {
            control: { type: 'radio' },
            options: ['nowrap', 'wrap', 'wrap-reverse', ''],
        },
    },
    component: UiFlex,
    tags: ['autodocs'],
    title: 'UiFlex',
} as Meta<typeof UiFlex>;

export const Template: StoryFn<typeof UiFlex> = (args: InstanceType<typeof UiFlex>['$props']) => ({
    components: { UiFlex },
    setup() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        return { args };
    },
    template: '<UiFlex v-bind="args" style="height: 100px;"><UiFlex>Блок 1</UiFlex><UiFlex>Блок 2</UiFlex></UiFlex>',
});

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
export const Default = Template.bind({}) as {
    args: InstanceType<typeof UiFlex>['$props'];
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
export const BgSecondary = Template.bind({}) as {
    args: InstanceType<typeof UiFlex>['$props'];
};
BgSecondary.args = {
    bg: 'secondary',
    borderColor: '',
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
export const BorderAccent = Template.bind({}) as {
    args: InstanceType<typeof UiFlex>['$props'];
};
BorderAccent.args = { borderColor: 'accent' };
