import * as express from "express";
import CategoriesDB from "../../database/queries/Categories";

const CategoriesRouter = express.Router();

//current path is /api/Categories
//gets all categories
CategoriesRouter.get("/", async (req, res) => {
  try {
    const Categories = await CategoriesDB.getAllCategories();
    if (Categories.length) {
      res.json(Categories);
    } else {
      res.status(400).json({ msg: "You are looking for categories that don't exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "A getAllCategories error has occured." });
  }
});

//gets one category
CategoriesRouter.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    const category = await CategoriesDB.getOneCategory(id);
    if (category.length) {
      res.json(category[0]);
    } else {
      res.status(400).json({ msg: "You are looking for a category that doesn't exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "A getOneCategory error occured" });
  }
});

export default CategoriesRouter;
