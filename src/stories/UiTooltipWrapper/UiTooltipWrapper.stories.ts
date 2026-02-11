import './UiTooltipWrapper.css';
import {
    UiFlex,
    UiTooltipContent,
    UiTooltipWrapper,
} from '@/components';
// @ts-expect-error vue3-vite type
import type { Meta, StoryFn } from '@storybook/vue3-vite';

export default {
    args: {
        action: 'mouseenter',
        appendTo: () => document.body,
        arrow: true,
        delay: () => [0, 0],
        disabled: false,
        duration: () => [500, 500],
        flip: true,
        hideOnClick: false,
        inline: false,
        interactive: false,
        interactiveBorder: 2,
        maxWidth: 350,
        modelValue: false,
        offset: () => [0, 10],
        placement: 'top',
        zIndex: 9999,
    },
    argTypes: {
        action: {
            control: { type: 'radio' },
            options: ['mouseenter', 'click', 'manual'],
        },
        appendTo: { control: { type: 'string' } },
        arrow: { control: { type: 'boolean' } },
        delay: { control: { type: 'string' } },
        disabled: { control: { type: 'boolean' } },
        duration: { control: { type: 'string' } },
        flip: { control: { type: 'boolean' } },
        hideOnClick: { control: { type: 'boolean' } },
        inline: { control: { type: 'boolean' } },
        interactive: { control: { type: 'boolean' } },
        interactiveBorder: { control: { type: 'number' } },
        maxWidth: { control: { type: 'number' } },
        modelValue: { control: { type: 'boolean' } },
        offset: { control: { type: 'string' } },
        placement: {
            control: { type: 'select' },
            options: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'],
        },
        zIndex: { control: { type: 'number' } },
    },
    component: UiTooltipWrapper,
    tags: ['autodocs'],
    title: 'UiTooltipWrapper',
} as Meta<typeof UiTooltipWrapper>;

const Template: StoryFn<typeof UiTooltipWrapper> = (args: InstanceType<typeof UiTooltipWrapper>['$props']) => ({
    components: {
        UiFlex,
        UiTooltipContent,
        UiTooltipWrapper,
    },
    setup() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        return { args };
    },
    template: `
        <UiFlex justify-content="center">
            <UiTooltipWrapper v-bind="args">
                <template #trigger>
                    <button>Кнопка-триггер</button>
                </template>
                <UiTooltipContent>
                    Информация об этой кнопке
                </UiTooltipContent>
            </UiTooltipWrapper>
        </UiFlex>`,
});

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
export const Default = Template.bind({}) as {
    args: InstanceType<typeof UiTooltipWrapper>['$props'];
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
export const WithoutArrow = Template.bind({}) as {
    args: InstanceType<typeof UiTooltipWrapper>['$props'];
};
WithoutArrow.args = { arrow: false };
