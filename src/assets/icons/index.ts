import type { DefineComponent } from 'vue';
import Loader from './Loader.vue';
import Reset from './Reset.vue';
type TIcons = Record<string, DefineComponent>; 

export default {
'loader': Loader,
'reset': Reset,
} as unknown as TIcons;