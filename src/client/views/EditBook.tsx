import * as React from "react";
import { useState, useEffect } from "react";
import { apiService } from "../services/apiService";
import { IBook } from "../../server/types";
import { useParams } from "react-router-dom";
import { ICategory } from "../../server/types";

const Edit = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState(0);
  const [Categories, setCategories] = useState<ICategory[]>([]);
  const [selectedCategoryByid, setSelectedCategoryByid] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    apiService(`/api/Books/${id}`)
      .then((data: IBook) => {
        setTitle(data.title);
        setAuthor(data.author);
        setPrice(data.price);
        setSelectedCategoryByid(data.categoryid);
      })
      .catch((error) => console.log(error));

    apiService(`/api/Categories`)
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const HandleEdit = () => {
    apiService(`/api/Books/${id}`, `PUT`, { title, author, price, categoryid: selectedCategoryByid })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  const DeleteBook = () => {
    apiService(`/api/Books/${id}`, "Delete")
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div>
        <h1>Change the info on this book!</h1>
        <div>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <input value={author} onChange={(e) => setAuthor(e.target.value)} />
          <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
          <select value={selectedCategoryByid} onChange={(e) => setSelectedCategoryByid(Number(e.target.value))}>
            {Categories.map((category) => (
              <option value={category.id}>{category.name}</option>
            ))}
          </select>
        </div>
        <button
          onClick={() => {
            HandleEdit();
          }}
        >
          Submit Edit
        </button>
        <button
          onClick={() => {
            DeleteBook();
          }}
        >
          Delete Book
        </button>
      </div>
    </>
  );
};

export default Edit;
