import { resolve } from 'path';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        vue(),
        cssInjectedByJsPlugin({
            useStrictCSP: true,
            relativeCSSInjection: false,
        }),
        dts({ rollupTypes: true }),
    ],
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
});
