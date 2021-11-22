import { DropdownOptionProps } from '@/components/dropdown/DropdownOption';

export declare interface DropdownProps {
  opened?: boolean;
  active?: DropdownOptionProps | null;
  options?: DropdownOptionProps[];
  maxHeight?: string;
  noResults?: boolean;
  openOnTop?: boolean;
}

export declare interface DropdownDictionary {
  noResultsTitle: string;
  noResultsDescription: string;
}
