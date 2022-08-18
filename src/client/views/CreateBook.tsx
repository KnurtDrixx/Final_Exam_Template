import * as React from "react";
import { useState, useEffect } from "react";
import { apiService } from "../services/apiService";
import { ICategory } from "../../server/types";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState(0);
  const [Categories, setCategories] = useState<ICategory[]>([]);
  const [CategoryByid, setCategoryByid] = useState(0);

  useEffect(() => {
    apiService(`/api/Categories`)
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const BindBook = () => {
    apiService(`/api/Books`, `POST`, { title, author, price, categoryid: CategoryByid })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div>
        <h1>Are you powerful enough to create a book?</h1>
        <div>
          <input placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <input placeholder="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
          <input placeholder="price" type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
          <select value={CategoryByid} onChange={(e) => setCategoryByid(Number(e.target.value))}>
            {Categories.map((category) => (
              <option value={category.id}>{category.name}</option>
            ))}
          </select>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            BindBook();
          }}
        >
          And In the Darkness Bind It
        </button>
      </div>
    </>
  );
};

export default CreateBook;
