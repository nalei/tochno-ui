export type PaginationItemType = 'number' | 'control' | 'go-to-input' | 'shifter';

export declare interface PaginationItemProps {
  page: number;
  current?: boolean;
  type?: PaginationItemType;
  disabled?: boolean;
  invalid?: boolean;
}
