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
      | {{ fileUploadDictionary.download }}
</template>

<script lang="ts">
  import { computed, defineComponent, ref, PropType } from 'vue';
  import Icon from '@/components/icon/Icon.vue';
  import { FileUploadDictionary } from '@/components/file/FileUpload';

  const DEFAULT_DICTIONARY: FileUploadDictionary = {
    maximumFileSize: 'Размер файла не должен превышать',
    mb: 'мегабайт',
    invalidFileType: 'Не допустимый тип файла',
    validTypes: 'Допустимые типы',
    file: 'Файл',
    download: 'Загрузить',
  };

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
      maxSize: {
        type: Number,
        default: 0,
      },
      availableTypes: {
        type: Array as PropType<string[]>,
        default: () => [],
      },
      dictionary: {
        type: Object as PropType<Partial<FileUploadDictionary>>,
        default: () => ({}),
      },
    },
    emits: ['change', 'error'],
    setup(props, { emit }) {
      const fileUploadDictionary = computed<FileUploadDictionary>(() => ({
        ...DEFAULT_DICTIONARY,
        ...props.dictionary,
      }));

      const file = ref<File | null>(null);

      const name = computed<string>(() => {
        if (props.fileName) {
          return props.fileName;
        }
        if (file.value) {
          return file.value.name;
        }
        return fileUploadDictionary.value.file;
      });

      const onClick = (e: Event) => {
        (e.target as HTMLInputElement).value = '';
      };

      const onChangeFile = (e: Event) => {
        const files: FileList | null = (e?.target as HTMLInputElement)?.files;
        if (!files?.length) {
          return;
        }
        if (props.maxSize !== 0 && +(files[0].size / 1_000_000).toFixed(2) > props.maxSize) {
          emit('error', `${fileUploadDictionary.value.maximumFileSize} ${props.maxSize} ${fileUploadDictionary.value.mb}.`);
          return;
        }

        if (props.availableTypes.length && !props.availableTypes.includes(files[0].type.split('/')[1])) {
          emit('error', `${fileUploadDictionary.value.invalidFileType}. ${fileUploadDictionary.value.validTypes} - ${props.availableTypes.join(', ')}.`);
          return;
        }
        file.value = files[0];
        emit('change', files[0]);
      };

      return {
        file,
        name,
        onChangeFile,
        onClick,
        fileUploadDictionary,
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
