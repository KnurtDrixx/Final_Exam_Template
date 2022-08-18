import * as React from "react";
import { useState, useEffect } from "react";
import { apiService } from "../services/apiService";
import { ICategory } from "../../server/types";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState(0);
};
