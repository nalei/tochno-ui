export declare interface PaginationProps {
  currentPage: number;
  total: number;
  maxVisible?: number;
  shift?: number;
  dict?: Partial<PaginationDictionary>;
}

export declare interface PaginationDictionary {
  nextPage: string;
  previousPage: string;
  shiftLeft: string;
  shiftRight: string;
  goToFirstPage: string;
  goToLastPage: string;
  invalidPage: string;
}
