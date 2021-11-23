import { App as Application, Plugin } from 'vue';
import { setVueInstance } from './utils/setVueInstance';
import Button from './components/button/Button.vue';

const components = {
  Button,
};

const install: Exclude<Plugin['install'], undefined> = (instance: Application) => {
  setVueInstance(instance);
  for (const componentKey in components) {
    instance.use((components as any)[componentKey]);
  }
};

export default install;
