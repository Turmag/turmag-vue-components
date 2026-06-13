import {
    UiFlex,
    UiText,
    UiTooltipContent,
    UiTooltipWrapper,
} from './components';
import type { App, Plugin } from 'vue';
import type {
    TUiFlexGap,
    TUiFlexPadding,
    TUiFlexRadius,
} from './types/UiFlexTypes';
import type { TUiTextSize } from './types/UiTextTypes';

// Plugin installation
export const install = (app: App): void => {
    app.component('UiFlex', UiFlex);
    app.component('UiText', UiText);
    app.component('UiTooltipContent', UiTooltipContent);
    app.component('UiTooltipWrapper', UiTooltipWrapper);
};

// Vue plugin
const VuComponentsPlugin: Plugin = { install };

// Default export (for use with app.use())
export default VuComponentsPlugin;

// Type augmentation for global components
declare module '@vue/runtime-core' {
    export interface IGlobalComponents {
        UiFlex: typeof UiFlex;
        UiText: typeof UiText;
        UiTooltipContent: typeof UiTooltipContent;
        UiTooltipWrapper: typeof UiTooltipWrapper;
    }
}

// Named exports (for direct import)
export {
    UiFlex,
    UiText,
    UiTooltipContent,
    UiTooltipWrapper,
    TUiTextSize,
    TUiFlexGap,
    TUiFlexPadding,
    TUiFlexRadius,
};
