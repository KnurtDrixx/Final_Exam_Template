import * as React from "react";
import { useState } from "react";
import { apiService } from "../services/apiService";
import { useNavigate } from "react-router-dom";

const pizza = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [yaLoggingInSon, setYaLoggingInSon] = useState(true);

  const nav = useNavigate();

  const UserLogin = () => {
    const data = { name, email, password };
    apiService(`/auth/${yaLoggingInSon ? "Login" : "Register"}`, "POST", data)
      .then((data) => {
        localStorage.setItem("token", data.token);
      })
      .catch((error) => console.log(error));

    nav(`/Books`);
  };

  return (
    <>
      <button onClick={() => setYaLoggingInSon(!yaLoggingInSon)}>Need to {yaLoggingInSon ? "REGISTER" : "Login"}</button>
      <div>
        {!yaLoggingInSon && <input placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />}
        <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={() => UserLogin()}>{yaLoggingInSon ? "Login!" : "Register!"}</button>
    </>
  );
};

export default pizza;
