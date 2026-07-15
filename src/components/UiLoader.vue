<template>
    <UiFlex
        justify-content="center"
        align-items="center"
        width="wfull"
        :class="$style.loader"
    >
        <UiIcon
            :class="$style.icon"
            :width="width"
            :height="width"
            viewBoxWidth="1024"
            viewBoxHeight="1024"
            icon-name="loader"
        />
    </UiFlex>
</template>

<script setup lang="ts">
import { UiFlex, UiIcon } from '.';

interface IProps {
    width?: number;
}

withDefaults(defineProps<IProps>(), { width: 70 });
</script>

<style lang="scss" module>
    .loader {
        height: 100%;
        color: var(--color-text-default);
    }

    .icon {
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
    }
</style>
