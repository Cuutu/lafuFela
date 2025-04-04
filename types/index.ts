import { NextRequest } from 'next/server'

export type ApiError = {
  message: string;
  code?: string;
  status?: number;
}

export type RouteContext = {
  params: { id: string }
}

export type ProductParams = {
  params: {
    id: string;
  };
}

export type RouteParams = {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
} 