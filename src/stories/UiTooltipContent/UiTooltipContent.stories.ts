import './UiTooltipContent.css';
import UiFlex from '../../components/UiFlex.vue';
import UiTooltipContent from '../../components/UiTooltipContent.vue';
// @ts-expect-error vue3-vite type
import type { Meta, StoryFn } from '@storybook/vue3-vite';

export default {
    args: {
        default: 'Содержимое тултипа',
        padding: '10px 12px',
        radius: 'r4',
        width: 'auto',
    },
    argTypes: {
        padding: { control: { type: 'string' } },
        radius: {
            control: { type: 'select' },
            options: ['r0', 'r2', 'r4', 'r6', 'r8', 'r12', 'r14', 'r16', 'r18', 'r20', 'r22', 'r24', 'r26', 'r28', 'r30', 'r32', ''],
        },
        width: { control: { type: 'string' } },
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
