<template>
    <span
        :class="[
            $style.text,
            $style[color],
            $style[size],
            $style[weight],
            $style[line],
            $style[wrap],
            $style[`display-${display}`],
            $style[`text-align-${textAlign}`],
        ]"
    >
        <slot>{{ text }}</slot>
    </span>
</template>

<script lang="ts" setup>
import type { Ref } from 'vue';

withDefaults(defineProps<{
    color?: 'default' | 'hover' | 'active' | 'secondary';
    display?: 'block' | 'inline' | 'flex' | '';
    line?: 'lh100' | 'lh110' | 'lh120' | 'lh130' | 'lh140' | 'lh150';
    size?: 'fs12' | 'fs14' | 'fs16' | 'fs18' | 'fs20' | 'fs24' | 'fs36';
    text?: string | number | Ref<string, string>;
    textAlign?: 'left' | 'center' | 'right' | '';
    weight?: 'fw400' | 'fw500' | 'fw600' | 'fw700';
    wrap?: 'nowrap' | 'balance' | '';
}>(), {
    color: 'default',
    display: '',
    line: 'lh100',
    size: 'fs16',
    text: '',
    textAlign: '',
    weight: 'fw400',
    wrap: '',
});
</script>

<style module lang="scss">
    .text {
        line-height: 100%;
    }

    .block {
        display: block;
    }

    $text-colors: default, hover, active, secondary;

    @each $color in $text-colors {
        .#{$color} {
            color: var(--color-text-#{$color});
        }
    }

    $sizes: 12, 14, 16, 18, 20, 24, 36;

    @each $size in $sizes {
        .fs#{$size} {
            font-size: #{$size}px;
        }
    }

    $weights: 400, 500, 600, 700;

    @each $weight in $weights {
        .fw#{$weight} {
            font-weight: #{$weight};
        }
    }

    $line-heights: 100, 110, 120, 130, 140, 150;

    @each $line-height in $line-heights {
        .lh#{$line-height} {
            line-height: #{$line-height}#{'%'};
        }
    }

    $displays: block, inline, flex;

    @each $display in $displays {
        .display-#{$display} {
            display: #{$display};
        }
    }

    $text-aligns: left, center, right;

    @each $text-align in $text-aligns {
        .text-align-#{$text-align} {
            text-align: #{$text-align};
        }
    }

    .nowrap {
        white-space: nowrap;
    }

    .balance {
        text-wrap: balance;
    }
</style>
