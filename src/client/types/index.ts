export interface IFetchOptions {
  method: string;
  headers?: HeadersInit;
  body?: string;
}

export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
}

export interface Payload {
  id: number;
  email: string;
}

export interface IBook {
  id: number;
  categoryid: number;
  title: string;
  author: string;
  price: number;
}

export interface ICategory {
  id: number;
  name: string;
}
