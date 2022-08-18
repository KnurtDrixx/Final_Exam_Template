import * as React from "react";
import { useState, useEffect } from "react";
import { apiService } from "../services/apiService";
import { IBook } from "../../server/types";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(() => {
    apiService("/api/Books")
      .then((data) => setBooks(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div>
        <h1>Look at these stupid books!</h1>
        {books.map((book) => (
          <Link to={`/Books/${book.id}`}>
            <h1>{book.title}</h1>
            <div>{book.author}</div>
            <div>{book.price}</div>
            <div>{book.name}</div>
          </Link>
        ))}
        <Link to={`/New`}>Print a new Book</Link>
      </div>
    </>
  );
};

export default Books;
