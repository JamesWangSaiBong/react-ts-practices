import React, { useState } from 'react'
import { ChildFour, MemoizedChildFour } from './ChildFour';

export const ParentFour = () => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("Clio")
  console.log("ParentFour Render");

  return (
    <div>
      <button onClick={() => setCount((c: number) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("Clio Mobile")}>Change name</button>
      <MemoizedChildFour name={name} />
    </div>
  )
}