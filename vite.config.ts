import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
/// <reference types="vitest/config" />
import { resolve } from 'path';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';
import vue from '@vitejs/plugin-vue';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
    plugins: [vue(), cssInjectedByJsPlugin({
        useStrictCSP: true,
        relativeCSSInjection: false,
    }), dts({ rollupTypes: true })],
    resolve: { alias: { '@': path.resolve(__dirname, './src') } },
    build: {
        lib: {
            name: 'turmag-vue-components',
            entry: resolve(__dirname, 'src/index.ts'),
            fileName: format => `turmag-vue-components.${format}.js`,
        },
        emptyOutDir: true,
        rollupOptions: {
            external: ['vue'],
            output: {
                exports: 'named',
                globals: { vue: 'Vue' },
            },
        },
    },
    test: {
        projects: [{
            extends: true,
            plugins: [
                // The plugin will run tests for the stories defined in your Storybook config
                // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
                storybookTest({ configDir: path.join(dirname, '.storybook') })],
            test: {
                name: 'storybook',
                browser: {
                    enabled: true,
                    headless: true,
                    provider: playwright({}),
                    instances: [{ browser: 'chromium' }],
                },
                setupFiles: ['.storybook/vitest.setup.ts'],
            },
        }],
    },
});
