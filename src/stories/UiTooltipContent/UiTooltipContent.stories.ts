import './UiTooltipContent.css';
import { UiFlex, UiTooltipContent } from '@/components';
// @ts-expect-error vue3-vite type
import type { Meta, StoryFn } from '@storybook/vue3-vite';

export default {
    args: {
        default: 'Содержимое тултипа',
        justifyContent: '',
        padding: '',
        paddingBlock: 'p10',
        paddingInline: 'p12',
        radius: 'r4',
        width: 'auto',
    },
    argTypes: {
        justifyContent: {
            control: { type: 'select' },
            options: ['flex-start', 'flex-end', 'center', 'stretch', 'normal', 'space-between', 'space-around', 'space-evenly', ''],
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
        radius: {
            control: { type: 'select' },
            options: ['r0', 'r2', 'r4', 'r6', 'r8', 'r12', 'r14', 'r16', 'r18', 'r20', 'r22', 'r24', 'r26', 'r28', 'r30', 'r32', ''],
        },
        width: { control: { type: 'text' } },
    },
    component: UiTooltipContent,
    tags: ['autodocs'],
    title: 'UiTooltipContent',
} as Meta<typeof UiTooltipContent>;

const Template: StoryFn<typeof UiTooltipContent> = (args: InstanceType<typeof UiTooltipContent>['$props']) => ({
    components: {
        UiFlex,
        UiTooltipContent,
    },
    setup() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        return { args };
    },
    template: `
        <UiFlex justify-content="center" align-items="center" bg="muted" border-color="secondary" border-color="secondary" style="height: 100px;">
            <UiTooltipContent v-bind="args">{{ args.default }}</UiTooltipContent>
        </UiFlex>`,
});

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
export const Default = Template.bind({}) as {
    args: InstanceType<typeof UiTooltipContent>['$props'];
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
export const BigRadius = Template.bind({}) as {
    args: InstanceType<typeof UiTooltipContent>['$props'];
};
BigRadius.args = { radius: 'r32' };

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
export const BigWidth = Template.bind({}) as {
    args: InstanceType<typeof UiTooltipContent>['$props'];
};
BigWidth.args = {
    justifyContent: 'center',
    width: '400px',
};
