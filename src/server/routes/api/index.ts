import * as express from "express";
import Books from "./BookRoutes";
import Categories from "./CategoriesRoutes";

const router = express.Router();
//current path is /api

router.use("/Books", Books);
router.use("/Categories", Categories);

export default router;
