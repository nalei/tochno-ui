<template lang="pug">
.storybook-card
  section.notification-component-usage
    h2.section-title.h-800 Component usage
    .usage-example
      pre.code-usage
        code
          | &lt;template lang="pug"&gt;
          | &nbsp;&nbsp;Messenger
          | &nbsp;&nbsp;Button(@click='showError') Show Error
          | &lt;/template&gt;
          |
          | &lt;script&gt;
          | &nbsp;&nbsp;import { useMessenger } from '@/components/messenger/use/messenger';
          | &nbsp;&nbsp;import Messenger from '@/components/messenger/Messenger';
          |
          | &nbsp;&nbsp;export default {
          | &nbsp;&nbsp;&nbsp;&nbsp;components: { Messenger },
          | &nbsp;&nbsp;&nbsp;&nbsp;setup () {
          | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const messenger = useMessenger();
          |
          | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return {
          | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;showError () {
          | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;messenger.error({
          | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;message: "This message is caused by an error",
          | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});
          | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
          | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
          | &nbsp;&nbsp;&nbsp;&nbsp;}
          | &nbsp;&nbsp;}
          | &lt;/script&gt;

  section.buttons
    Button(
      size='s'
      mode='secondary'
      @click='messenger.error({ message: "This message is caused by an error" })'
    ) Show 'Error'
    Button(
      size='s'
      mode='secondary'
      @click='messenger.warn({ message: "This message is caused by an warning" })'
    ) Show 'Warning'
    Button(
      size='s'
      mode='secondary'
      @click='messenger.success({ message: "This message is caused by an success" })'
    ) Show 'Success'
    Button(
      size='s'
      mode='secondary'
      @click='messenger.info({ message: "This message is caused by an info" })'
    ) Show 'Info'
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useMessenger } from '@/components/messenger/use/messenger';
  import Button from '@/components/button/Button.vue';

  export default defineComponent({
    components: { Button },
    setup() {
      const messenger = useMessenger();

      return { messenger };
    },
  });
</script>

<style scoped>
  .notification-component-usage {
    margin-bottom: 48px;
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(4, max-content);
    column-gap: 20px;
    row-gap: 20px;
    justify-content: start;
    grid-auto-flow: row;
  }
</style>
