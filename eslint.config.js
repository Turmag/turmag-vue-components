import { aliases } from './aliases.js';
// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';
import config from 'turmag-eslint-config';

export default [...config, {
    rules: {
        'special-rules/add-vue-extension': ['error', { aliases }],
        'special-rules/use-shortest-alias': ['error', { aliases }],
    },
}, ...storybook.configs['flat/recommended']];
