import * as React from "react";
import { useState, useEffect } from "react";
import { apiService } from "../services/apiService";
import { IBook } from "../../server/types";
import { Link, useParams } from "react-router-dom";

const Book = () => {
  const [singleBook, setSingleBook] = useState<IBook>();
  const { id } = useParams();

  useEffect(() => {
    apiService(`/api/Books/${id}`)
      .then((data) => setSingleBook(data))
      .catch((error) => console.log(error));
  }, []);

  if (!singleBook) {
    return (
      <>
        <div>loading single Book</div>
      </>
    );
  }

  return (
    <>
      <div>
        <h1>Look at this Book</h1>
        <div>
          <div>{singleBook.title}</div>
          <div>{singleBook.author}</div>
          <div>{singleBook.price}</div>
          <div>{singleBook.name}</div>
        </div>
        <Link to={`/Edit/${singleBook.id}`}>Wouldst thou like to edit?</Link>
      </div>
    </>
  );
};

export default Book;
