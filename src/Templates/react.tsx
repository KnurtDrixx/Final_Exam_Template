import * as React from "react";
import { useState, useEffect } from "react";

const beans = () => {
  const [corn, setCorn] = useState(true);

  useEffect(() => {
    fetch("/corn")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div></div>
    </>
  );
};

export default beans;
