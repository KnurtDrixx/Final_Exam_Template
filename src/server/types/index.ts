export {};
declare global {
  namespace Express {
    interface Request {
      payload: Payload;
    }
  }
}

export interface User {
  id?: number;
  email: string;
  password: string;
  name: string;
}

export interface Payload {
  id: number;
  email: string;
}

export interface IBook {
  id?: number;
  categoryid: number;
  title: string;
  author: string;
  price: number;
  name?: string;
}

export interface ICategory {
  id: number;
  name: string;
}
