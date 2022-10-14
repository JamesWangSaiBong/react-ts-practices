import React, { useState } from 'react'
import { ChildTwo, MemoizedChildTwo } from './ChildTwo';

export const ParentTwo = () => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("Clio")
  console.log("ParentTwo Render");

  return (
    <div>
      <button onClick={() => setCount((c: number) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("Clio Mobile")}>Change name</button>
      {/* <ChildTwo name={name} /> */}
      <MemoizedChildTwo name={name} />
    </div>
  )
}