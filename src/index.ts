import type { App, Plugin } from 'vue';
import UiFlex from './components/UiFlex.vue';

// Plugin installation
export const install = (app: App): void => {
    app.component('UiFlex', UiFlex);
};

// Vue plugin
const VuComponentsPlugin: Plugin = { install };

// Default export (for use with app.use())
export default VuComponentsPlugin;

// Named exports (for direct import)
export { UiFlex };

// Type augmentation for global components
declare module '@vue/runtime-core' {
    export interface IGlobalComponents {
        UiFlex: typeof UiFlex;
    }
}
