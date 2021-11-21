<template lang="pug">
div
  h1 {{ msg }}
  p For a guide and recipes on how to configure / customize this project,<br> check out the
  a(
    target='_blank'
    rel='noopener'
    href='https://cli.vuejs.org') vue-cli documentation
  h3 Installed CLI Plugins
  ul
    li
      a(
        target='_blank'
        rel='noopener'
        href='https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel') babel
    li
      a(
        target='_blank'
        rel='noopener'
        href='https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router') router
    li
      a(
        target='_blank'
        rel='noopener'
        href='https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint') eslint
    li
      a(
        target='_blank'
        rel='noopener'
        href='https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest') unit-jest
    li
      a(
        target='_blank'
        rel='noopener'
        href='https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript') typescript

  h3 Essential Links
  ul
    li
      a(
        target='_blank'
        rel='noopener'
        href='https://vuejs.org') Core Docs
    li
      a(
        target='_blank'
        rel='noopener'
        href='https://forum.vuejs.org') Forum
    li
      a(
        target='_blank'
        rel='noopener'
        href='https://chat.vuejs.org') Community Chat
    li
      a(
        target='_blank'
        rel='noopener'
        href='https://twitter.com/vuejs') Twitter
    li
      a(
        target='_blank'
        rel='noopener'
        href='https://news.vuejs.org') News

  h3 Ecosystem
  ul
    li
      a(
        target='_blank'
        rel='noopener'
        href='https://router.vuejs.org') vue-router
    li
      a(
        target='_blank'
        rel='noopener'
        href='https://vuex.vuejs.org') vuex
    li
      a(
        target='_blank'
        rel='noopener'
        href='https://github.com/vuejs/vue-devtools#vue-devtools') vue-devtools
    li
      a(
        target='_blank'
        rel='noopener'
        href='https://vue-loader.vuejs.org') vue-loader
    li
      a(
        target='_blank'
        rel='noopener'
        href='https://github.com/vuejs/awesome-vue') awesome-vue
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'HelloWorld',
    props: {
      msg: String,
    },
  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
