import { User } from "../../types";
import { query } from "../index";

const getOneUser = (email: string) => query<User[]>("SELECT * FROM Users WHERE email = ?", [email]);
const createOneUser = (newUser: User) => query("INSERT INTO Users SET ?", [newUser]);

export default {
  getOneUser,
  createOneUser,
};
