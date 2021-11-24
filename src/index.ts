// import { App as Application, Plugin } from 'vue';
// import * as components from './components/index';

// const install: Exclude<Plugin['install'], undefined> = (instance: Application) => {
//   for (const componentKey in components) {
//     instance.use((components as any)[componentKey]);
//   }
// };

// export default install;

export { default as Button } from './components/button/Button.vue';
