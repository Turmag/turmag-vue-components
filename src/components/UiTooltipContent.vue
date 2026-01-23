<template>
    <div
        :class="[$style.container, $style[radius]]"
        :style="{
            padding: padding,
            width: width,
        }"
    >
        <UiText align="center">
            <slot />
        </UiText>
    </div>
</template>

<script setup lang="ts">
import { UiText } from './';

interface IProps {
    padding?: string;
    radius?: '' | 'r0' | 'r2' | 'r4' | 'r6' | 'r8' | 'r12' | 'r14' | 'r16' | 'r18' | 'r20' | 'r22' | 'r24' | 'r26' | 'r28' | 'r30' | 'r32';
    width?: string;
}

withDefaults(defineProps<IProps>(), {
    padding: '10px 12px',
    radius: 'r4',
    width: 'auto',
});
</script>

<style module lang="scss">
    .container {
        background: var(--background-color-default);
        text-align: center;
        word-break: break-word;
    }

    @for $i from 0 to 120 {
        $value: $i * 2;

        .r#{$value} {
            border-radius: #{$value}px;
        }
    }
</style>
