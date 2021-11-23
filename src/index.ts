import Vue from 'vue';
import Button from './components/button/Button';
const Components = {
  Button,
};

const app = Vue.createApp({});

Object.keys(Components).forEach((name) => {
  // app.component(name, Components[name])
});

export default Components;
