import * as React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Books from "./views/Books";
import Book from "./views/SingleBook";
import Edit from "./views/EditBook";
import CreateBook from "./views/CreateBook";
import Login from "./views/Login";
import PrivateRoute from "./components/PrivateRoute";

const App = (props: AppProps) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Welcome to Silent Library... Shhhh</h1>
              <Link to="/Books">Enter</Link>
              <Link to="/Login">Login</Link>
            </div>
          }
        />
        <Route path="/Login" element={<Login />} />

        <Route path="/Books" element={<Books />} />
        <Route path="/Books/:id" element={<Book />} />

        <Route
          path="/Edit/:id"
          element={
            <PrivateRoute>
              <Edit />
            </PrivateRoute>
          }
        />

        <Route
          path="/New"
          element={
            <PrivateRoute>
              <CreateBook />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

interface AppProps {}

export default App;
