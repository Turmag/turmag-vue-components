import {
    UiFlex,
    UiIcon,
    UiLoader,
    UiText,
    UiThemeToggler,
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
    app.component('UiIcon', UiIcon);
    app.component('UiLoader', UiLoader);
    app.component('UiText', UiText);
    app.component('UiTooltipContent', UiTooltipContent);
    app.component('UiTooltipWrapper', UiTooltipWrapper);
    app.component('UiThemeToggler', UiThemeToggler);
};

// Vue plugin
const VuComponentsPlugin: Plugin = { install };

// Default export (for use with app.use())
export default VuComponentsPlugin;

// Type augmentation for global components
declare module '@vue/runtime-core' {
    export interface IGlobalComponents {
        UiFlex: typeof UiFlex;
        UiIcon: typeof UiIcon;
        UiLoader: typeof UiLoader;
        UiText: typeof UiText;
        UiThemeToggler: typeof UiThemeToggler;
        UiTooltipContent: typeof UiTooltipContent;
        UiTooltipWrapper: typeof UiTooltipWrapper;
    }
}

// Named exports (for direct import)
export {
    UiFlex,
    UiIcon,
    UiLoader,
    UiText,
    UiTooltipContent,
    UiTooltipWrapper,
    UiThemeToggler,
    TUiTextSize,
    TUiFlexGap,
    TUiFlexPadding,
    TUiFlexRadius,
};
