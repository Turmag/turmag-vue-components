<template>
    <component
        :is="tag"
        :class="[
            $style.container,
            $style[height],
            $style[width],
            $style[radius],
            $style[`position-${position}`],
            $style[`direction-${direction}`],
            $style[`align-items-${alignItems}`],
            $style[`align-content-${alignContent}`],
            $style[`align-self-${alignSelf}`],
            $style[`justify-items-${justifyItems}`],
            $style[`justify-content-${justifyContent}`],
            $style[`justify-self-${justifySelf}`],
            $style[`wrap-${wrap}`],
            $style[`gap-${gap}`],
            $style[`column-gap-${colGap}`],
            $style[`row-gap-${rowGap}`],
            $style[`padding-${padding}`],
            $style[`padding-inline-${paddingInline}`],
            $style[`padding-block-${paddingBlock}`],
            $style[`bg-${bg}`],
            $style[`border-${borderColor}`],
            {
                [$style.grow]: !!grow,
            }
        ]"
    >
        <slot />
    </component>
</template>

<script setup lang="ts">
import type {
    TUiFlexBg,
    TUiFlexGap,
    TUiFlexPadding,
    TUiFlexRadius,
} from '@/types/UiFlexTypes';

withDefaults(defineProps<{
    alignContent?: '' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch' | 'normal' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: '' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    alignSelf?: '' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch' | 'auto';
    bg?: TUiFlexBg;
    borderColor?: '' | 'default' | 'secondary' | 'accent' | 'muted';
    colGap?: TUiFlexGap;
    direction?: '' | 'col' | 'reverse' | 'col-reverse';
    gap?: TUiFlexGap;
    grow?: boolean;
    height?: '' | 'hfull';
    justifyContent?: '' | 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'normal' | 'space-between' | 'space-around' | 'space-evenly';
    justifyItems?: '' | 'flex-start' | 'flex-end' | 'center' | 'stretch';
    justifySelf?: '' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch' | 'auto';
    padding?: TUiFlexPadding;
    paddingBlock?: TUiFlexPadding;
    paddingInline?: TUiFlexPadding;
    position?: '' | 'relative' | 'absolute' | 'sticky' | 'fixed';
    radius?: TUiFlexRadius;
    rowGap?: TUiFlexGap;
    tag?: keyof HTMLElementTagNameMap | 'router-link';
    width?: '' | 'wfull';
    wrap?: '' | 'nowrap' | 'wrap' | 'wrap-reverse';
}>(), {
    alignContent: '',
    alignItems: '',
    alignSelf: '',
    bg: '',
    borderColor: '',
    colGap: '',
    direction: '',
    gap: '',
    grow: false,
    height: '',
    justifyContent: '',
    justifyItems: '',
    justifySelf: '',
    padding: '',
    paddingBlock: '',
    paddingInline: '',
    position: '',
    radius: 'r0',
    rowGap: '',
    tag: 'div',
    width: '',
    wrap: '',
});
</script>

<style module lang="scss">
    .container {
        display: flex;
    }

    $directions: (
        "col": column,
        "reverse": row-reverse,
        "col-reverse": column-reverse,
    );

    @each $key, $value in $directions {
        .direction-#{$key} {
            flex-direction: #{$value};
        }
    }

    .hfull {
        height: 100%;
    }

    .wfull {
        width: 100%;
    }

    $positions: relative, absolute, sticky, fixed;

    @each $position in $positions {
        .position-#{$position} {
            position: #{$position};
        }
    }

    $align-items: flex-start, flex-end, center, baseline, stretch;

    @each $align-item in $align-items {
        .align-items-#{$align-item} {
            align-items: #{$align-item};
        }
    }

    $align-content-items: flex-start, flex-end, center, baseline, stretch, normal, space-between, space-around, space-evenly;

    @each $align-content-item in $align-content-items {
        .align-content-#{$align-content-item} {
            align-content: #{$align-content-item};
        }
    }

    $align-self-items: flex-start, flex-end, center, baseline, stretch, auto;

    @each $align-self-item in $align-self-items {
        .align-self-#{$align-self-item} {
            align-self: #{$align-self-item};
        }
    }

    $justify-items: flex-start, flex-end, center, stretch;

    @each $justify-item in $justify-items {
        .justify-item-#{$justify-item} {
            justify-items: #{$justify-item};
        }
    }

    $justify-content-items: flex-start, flex-end, center, stretch, normal, space-between, space-around, space-evenly;

    @each $justify-content-item in $justify-content-items {
        .justify-content-#{$justify-content-item} {
            justify-content: #{$justify-content-item};
        }
    }

    $justify-self-items: flex-start, flex-end, center, stretch, auto;

    @each $justify-self-item in $justify-self-items {
        .justify-self-#{$justify-self-item} {
            justify-self: #{$justify-self-item};
        }
    }

    $wraps: nowrap, wrap, wrap-reverse;

    @each $wrap in $wraps {
        .wrap-#{$wrap} {
            flex-wrap: #{$wrap};
        }
    }

    @for $i from 0 to 120 {
        $value: $i * 2;

        .r#{$value} {
            border-radius: #{$value}px;
        }

        .gap-g#{$value} {
            gap: #{$value}px;
        }

        .column-gap-g#{$value} {
            column-gap: #{$value}px;
        }

        .row-gap-g#{$value} {
            row-gap: #{$value}px;
        }

        .padding-p#{$value} {
            padding: #{$value}px;
        }

        .padding-inline-p#{$value} {
            padding-inline: #{$value}px;
        }

        .padding-block-p#{$value} {
            padding-block: #{$value}px;
        }
    }

    .grow {
        flex-grow: 1;
    }

    $bg-colors: default, secondary, accent, surface, muted, quiet;

    @each $color in $bg-colors {
        .bg-#{$color} {
            background-color: var(--background-color-#{$color});
        }
    }

    $border-colors: default, secondary, accent, muted;

    @each $color in $border-colors {
        .border-#{$color} {
            border: 1px solid;
            border-color: var(--color-border-#{$color});
        }
    }
</style>
