import React, { useState } from "react";

export default function USeState() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count+1)
  }
  return (
    <>
      <h1 className="mt-5 text-center">useState</h1>
      <h2 className="mt-5 text-center">First Name:{count}</h2>
      <div className="text-center">
      <button className=" btn btn-danger px-3 py-1 text-center" onClick={increment}>Increament</button>
      </div>
    </>
  );
}
