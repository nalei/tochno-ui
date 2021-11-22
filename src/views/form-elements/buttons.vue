<template lang="pug">
.buttons.storybook-card
  section.buttons-component-usage
    h2.section-title.h-800 Component usage
    .usage-example
      pre.code-usage
        code
          | Button(
          | &nbsp;&nbsp;size='l'
          | &nbsp;&nbsp;mode='secondary'
          | &nbsp;&nbsp;:icon='{ name: "ic24-plus" }'
          | ) Button
      Button(
        size='l'
        mode='secondary'
        :icon='{ name: "ic24-plus" }'
      ) Button

  section.buttons-preview
    Button Button
    Button(:icon='{ name: "ic24-file" }') Button with icon
    Button(disabled) disabled
    Button(iconOnly :icon='{ name: "ic24-user-circle" }')

    Button(size='m' mode='primary') Button
    Button(
      size='m'
      mode='primary'
      :icon='{ name: "ic24-file" }'
    ) Button with icon
    Button(
      size='m'
      mode='primary'
      disabled
    ) disabled
    Button(
      size='m'
      mode='primary'
      iconOnly
      :icon='{ name: "ic24-user-circle" }'
    )

    Button(
      size='m'
      mode='secondary'
      loading
    ) Button
    Button(
      size='m'
      mode='secondary'
      :icon='{ name: "ic24-file" }'
    ) Button with icon
    Button(
      size='m'
      mode='secondary'
      disabled
    ) disabled
    Button(
      size='m'
      mode='secondary'
      iconOnly
      :icon='{ name: "ic24-user-circle" }'
    )

    Button(size='l' loading) Button
    Button(size='l' :icon='{ name: "ic24-user-circle" }') Button with icon
    Button(size='l' disabled) disabled
    Button(
      size='l'
      iconOnly
      :icon='{ name: "ic24-user-circle" }'
    )

    Button(
      size='s'
      mode='info'
      loading
    ) Button
    Button(
      size='s'
      mode='info'
      :icon='{ name: "ic24-user-circle" }'
    ) Button with icon
    Button(
      size='s'
      mode='info'
      disabled
    ) disabled
    Button(
      size='s'
      mode='info'
      iconOnly
      :icon='{ name: "ic24-user-circle" }'
    )

    Button(
      size='s'
      mode='state'
      loading
    ) Button
    Button(
      size='s'
      mode='state'
      :icon='{ name: "ic24-user-circle" }'
    ) Button with icon
    Button(
      size='s'
      mode='state'
      disabled
    ) disabled
    Button(
      size='s'
      mode='state'
      iconOnly
      :icon='{ name: "ic24-user-circle" }'
    )
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Button from '@/components/button/Button.vue';

  export default defineComponent({
    components: { Button },
  });
</script>

<style scoped>
  .buttons-component-usage {
    margin-bottom: 48px;
  }
  .buttons-preview {
    display: grid;
    grid-template-columns: repeat(4, max-content);
    column-gap: 20px;
    row-gap: 20px;
    justify-content: start;
    grid-auto-flow: row;
  }
</style>
