<template>
    <UiFlex
        :padding-block="paddingBlock"
        :padding-inline="paddingInline"
        :radius
        :justify-content="justifyContent"
        :class="$style.container"
        :style="{ width }"
    >
        <UiText text-align="center">
            <slot />
        </UiText>
    </UiFlex>
</template>

<script setup lang="ts">
import { UiFlex, UiText } from './';

interface IProps {
    justifyContent?: '' | 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'normal' | 'space-between' | 'space-around' | 'space-evenly';
    padding?: '' | 'p2' | 'p4' | 'p6' | 'p8' | 'p10' | 'p12' | 'p14' | 'p16' | 'p18' | 'p20' | 'p24' | 'p28' | 'p32' | 'p36' | 'p40' | 'p42' | 'p64' | 'p80' | 'p120';
    paddingBlock?: '' | 'p2' | 'p4' | 'p6' | 'p8' | 'p10' | 'p12' | 'p14' | 'p16' | 'p18' | 'p20' | 'p24' | 'p28' | 'p32' | 'p36' | 'p40' | 'p42' | 'p64' | 'p80' | 'p120';
    paddingInline?: '' | 'p2' | 'p4' | 'p6' | 'p8' | 'p10' | 'p12' | 'p14' | 'p16' | 'p18' | 'p20' | 'p24' | 'p28' | 'p32' | 'p36' | 'p40' | 'p42' | 'p64' | 'p80' | 'p120';
    radius?: '' | 'r0' | 'r2' | 'r4' | 'r6' | 'r8' | 'r12' | 'r14' | 'r16' | 'r18' | 'r20' | 'r22' | 'r24' | 'r26' | 'r28' | 'r30' | 'r32';
    width?: string;
}

withDefaults(defineProps<IProps>(), {
    justifyContent: '',
    padding: '',
    paddingBlock: 'p10',
    paddingInline: 'p12',
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
</style>
