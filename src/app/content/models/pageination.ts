export interface Pagination {
  page: number;
  offset: number;
  limit: number;
  count: number;
  pages: number;
  filters: {
    userId: string | null | undefined;
  }
}
