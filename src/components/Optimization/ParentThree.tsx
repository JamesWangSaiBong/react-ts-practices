import React, { useState } from 'react'
import { ChildThree, MemoizedChildThree } from './ChildThree';

export const ParentThree = () => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("Clio")
  console.log("ParentThree Render");

  return (
    <div>
      <button onClick={() => setCount((c: number) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("Clio Mobile")}>Change name</button>
      <MemoizedChildThree name={name}>
        {/* Hello */}
        <strong>Hello</strong>
      </MemoizedChildThree>
    </div>
  )
}