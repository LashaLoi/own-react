import React, { useState, useEffect } from "./react";

export const App = () => {
  const [count, setCount] = useState(0);
  const [hello, setHello] = useState(false);

  useEffect(() => {
    console.log("hello");
  }, [count, hello]);

  const handleCount = () => setCount(count + 1);
  const handleHello = () => setHello(!hello);

  return (
    <div>
      <p>Hello React! {count}</p>
      {hello && <div>Hello</div>}
      <button onClick={handleHello}>Say hello</button>
      <button onClick={handleCount}>+</button>
    </div>
  );
};
