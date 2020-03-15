import React, { useState } from "./react";

export const App = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => setCount(count => count + 1);

  return (
    <div>
      <p>Hello React! {count}</p>
      <button onClick={handleCount}>+</button>
    </div>
  );
};
