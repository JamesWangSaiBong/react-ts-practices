import React, { useState } from 'react'

export const UseState = () => {
  const [count, setCount] = useState<number>(0);
  console.log("UseState Render");

  return (
    <div>
      <button onClick={() => setCount((c: number) => c + 1)}>Count - {count}</button>
      <button onClick={() => setCount(0)}>Set count to 0</button>
      <button onClick={() => setCount(5)}>Set count to 5</button>
    </div>
  )
}