<template lang="pug">
.storybook-card
  section
    h2.section-title.h-800 Component usage
    .usage-example
      pre.code-usage
        code
          | FileUpload(
          | &nbsp;&nbsp;@error='onError'
          | &nbsp;&nbsp;@change='onBrowseFile'
          | &nbsp;&nbsp;:maxSize='200'
          | &nbsp;&nbsp;:fileName='file?.name'
          | &nbsp;&nbsp;:availableTypes='["jpeg", "png"]'
          | )
      FileUpload(
        @error='onError'
        @change='onBrowseFile'
        :maxSize='200'
        :fileName='file?.name'
        :availableTypes='["jpeg", "png"]'
      )
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useMessenger } from '@/components/messenger/use/messenger';
  import FileUpload from '@/components/file/FileUpload.vue';

  export default defineComponent({
    components: { FileUpload },
    setup() {
      const file = ref<File | null>(null);
      const messenger = useMessenger();

      const onBrowseFile = (file: File) => {
        console.log(file);
      };

      const onError = (err: string) => {
        messenger.error({
          message: err,
        });
      };

      return { file, onBrowseFile, onError };
    },
  });
</script>
