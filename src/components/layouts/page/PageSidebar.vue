<template lang="pug">
.page-sidebar
  .sidebar-header
    slot(name='header')
  .sidebar-body
    slot
  .flexspace
  .sidebar-footer
    slot(name='footer')
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'PageSidebar',
  });
</script>

<style scoped>
  .page-sidebar {
    z-index: 9;
    position: sticky;
    display: flex;
    flex-direction: column;
    top: 0;
    min-height: 100vh;
    height: 100%;
    width: 239px;
    min-width: 239px;
    box-sizing: content-box;
    border-right: 1px solid var(--gray-150);
    background-color: var(--white);
    user-select: none;
    @media (--viewport-sm) {
      width: 70px;
      min-width: 70px;
    }

    .sidebar-header {
      padding: 17px 12px 8px 12px;
      min-height: 65px;
      h3 {
        font-family: var(--font-secondary);
        color: var(--font-color-primary);
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.4px;
        white-space: nowrap;
      }
    }
    .sidebar-footer {
      border-top: 1px solid var(--gray-100);
    }
  }
</style>
