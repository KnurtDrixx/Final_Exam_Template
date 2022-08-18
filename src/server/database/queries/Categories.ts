import { ICategory } from "../../types";
import { query } from "../index";

const getAllCategories = () => query<ICategory[]>("SELECT * FROM Categories", []);
const getOneCategory = (id: number) => query<ICategory[]>("SELECT * FROM Categories WHERE id = ?", [id]);

export default {
  getAllCategories,
  getOneCategory,
};
