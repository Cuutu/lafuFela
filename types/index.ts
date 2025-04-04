export type ApiError = {
  message: string;
  code?: string;
  status?: number;
}

export type RouteParams = {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
} 