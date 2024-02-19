export type PaginationQuery = {
  offset: number;
  limit: number;
};


export type PaginatedResponse<T> = {
  data: T[]
  total: number
}
