import * as express from "express";
import router from ".";
import BooksDB from "../../database/queries/Books";
import { isValidToken } from "../../utilities/tokenCheck";

const booksRouter = express.Router();

//current path is /api/Books
//gets all books
booksRouter.get("/", async (req, res) => {
  try {
    const books = await BooksDB.getAllBooks();
    if (books.length) {
      res.json(books);
    } else {
      res.status(400).json({ msg: "You are looking for a book that doesn't exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "A getAllBooks error has occured." });
  }
});

//gets one book
booksRouter.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    const book = await BooksDB.getOneBook(id);
    if (book.length) {
      res.json(book[0]);
    } else {
      res.status(400).json({ msg: "You are looking for a book that doesn't exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "A getOneBook error occured" });
  }
});

// create a book
// add isValidToken when the auth is ready to be added
booksRouter.post("/", isValidToken, async (req, res) => {
  try {
    const categoryid: number = req.body.categoryid;
    const title: string = req.body.title;
    const author: string = req.body.author;
    const price: number = req.body.price;

    const newBookInfo = { categoryid, title, author, price };

    const DBres = await BooksDB.createOneBook(newBookInfo);
    res.json({ msg: "Book created successfully", id: DBres.insertId });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "A createOneBook error occured" });
  }
});

//update a book
//add isValidToken middleware for authorization
booksRouter.put("/:id", isValidToken, async (req, res) => {
  let { categoryid, title, author, price } = req.body;
  const id = Number(req.params.id);

  const updatedBookInfo = { categoryid, title, author, price };

  try {
    const updateBook = await BooksDB.updateOneBook(id, updatedBookInfo);

    if (updateBook.affectedRows) {
      res.status(200).json({ msg: "Book successfully updated" });
    } else {
      res.status(400).json({ msg: "Book update Failed" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "A updateOneBook error occured" });
  }
});

//delete a book
//add isValidToken
booksRouter.delete("/:id", isValidToken, async (req, res) => {
  const id = Number(req.params.id);

  try {
    const destroyBook = await BooksDB.deleteOneBook(id);
    if (destroyBook.affectedRows) {
      res.status(200).json({ msg: "Book successfully burned" });
    } else {
      res.status(400).json({ msg: "Book was not burned" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "A deleteOneBook error occured" });
  }
});

export default booksRouter;
