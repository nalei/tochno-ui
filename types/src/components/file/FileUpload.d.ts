export declare interface FileUploadDictionary {
  maximumFileSize: string;
  mb: string;
  invalidFileType: string;
  validTypes: string;
  file: string;
  download: string;
}

export default class FileUpload extends Vue {
  fileName?: string;
  disabled?: boolean;
  maxSize?: number;
  availableTypes?: string;
  dictionary?: FileUploadDictionary;
}
