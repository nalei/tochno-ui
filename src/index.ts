import Vue from 'vue';
import Button from './components/button/Button.vue';
const Components = {
  Button,
};

const app = Vue.createApp({});

Object.values(Components).forEach((component) => {
  app.component(component.name, component);
});

export default Components;
