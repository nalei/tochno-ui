<template lang="pug">
label.file-wrapper
  input.file-input(
    v-bind='$attrs'
    type='file'
    @change='onChangeFile'
    :disabled='disabled'
  )
  template(v-if='file || fileName')
    .file-label.text-13px-regular.loaded
      Icon(name='ic24-file')
      | {{ name }}
  template(v-else)
    .file-label.text-13px-medium
      Icon(name='ic24-file-import')
      | Загрузить
</template>

<script lang="ts">
  import { computed, defineComponent, ref } from 'vue';
  import Icon from '@/components/icon/Icon.vue';

  export default defineComponent({
    name: 'FileUpload',
    components: { Icon },
    props: {
      fileName: {
        type: String,
        default: '',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['change'],
    setup(props, { emit }) {
      const file = ref<File | null>(null);

      const name = computed<string>(() => {
        if (props.fileName) {
          return props.fileName;
        }
        if (file.value) {
          return file.value.name;
        }
        return 'Файл';
      });

      const onChangeFile = (e: Event) => {
        const files: FileList | null = (e?.target as HTMLInputElement)?.files;
        if (!files?.length) {
          return;
        }
        file.value = files[0];
        emit('change', files[0]);
      };

      return {
        file,
        name,
        onChangeFile,
      };
    },
  });
</script>

<style scoped>
  .file-wrapper {
    cursor: pointer;
  }

  .file-input {
    display: none;
  }

  .file-label {
    display: flex;
    align-items: center;
    color: var(--gray-500);

    .sui-icon {
      margin-right: 6px;
      width: 20px;
      min-width: 20px;
      height: 20px;
      --icon-color: var(--gray-500);
    }

    &.loaded {
      color: var(--black);

      .sui-icon {
        --icon-color: var(--black);
      }
    }

    &:hover {
      color: var(--blue-500);

      .sui-icon {
        --icon-color: var(--blue-500);
      }
    }
  }
</style>
