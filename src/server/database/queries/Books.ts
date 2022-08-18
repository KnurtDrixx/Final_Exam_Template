import { IBook } from "../../types";
import { query } from "../index";

const getAllBooks = () => query<IBook[]>("select Books.*, name from Books JOIN Categories ON Books.categoryid = Categories.id", []);
const getOneBook = (id: number) => query<IBook[]>("select Books.*, name from Books JOIN Categories ON Books.categoryid = Categories.id WHERE Books.id = ?", [id]);
const deleteOneBook = (id: number) => query("DELETE FROM Books WHERE id = ?", [id]);
const createOneBook = (newBook: IBook) => query("INSERT INTO Books SET ?", [newBook]);
const updateOneBook = (id: number, newBook: IBook) => query("UPDATE Books SET ? WHERE id = ?", [newBook, id]);

export default {
  getAllBooks,
  getOneBook,
  deleteOneBook,
  createOneBook,
  updateOneBook,
};
