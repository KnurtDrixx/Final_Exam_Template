import * as express from "express";
import PasswordUtils from "../../utilities/passwords";
import UsersDB from "../../database/queries/Users";
import tokenUtils from "../../utilities/token";

const router = express.Router();

//current path is /auth

router.post("/register", async (req, res) => {
  const { email, password, name } = req.body;
  if (!name || !email || !password) return res.status(400).json({ msg: "Please enter the correct info." });

  try {
    const hashedPass = PasswordUtils.createPassword(password);
    const newUser = await UsersDB.createOneUser({ name, email, password: hashedPass });
    const token = tokenUtils.signToken({ id: newUser.insertId, email });
    res.status(200).json({ msg: "New User Created Successfully", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "this broke " });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ msg: "Please enter email and password to continue" });

  try {
    const checkUser = await UsersDB.getOneUser(email);
    const User = checkUser[0];

    if (!User) {
      return res.status(400).json({ msg: "Provide proper credentials to continue" });
    }
    const checkedPassword = PasswordUtils.comparePassword(password, User.password);

    if (!checkedPassword) {
      return res.status(400).json({ msg: "Provide proper credentials to continue" });
    }

    const token = tokenUtils.signToken({ email, id: User.id! });
    res.status(200).json({ msg: "Login successful", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Login Failed" });
  }
});

export default router;
