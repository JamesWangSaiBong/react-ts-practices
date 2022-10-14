import React, { useMemo, useState } from 'react'
import { ChildFive, MemoizedChildFive } from './ChildFive';

export const ParentFive = () => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("Clio")
  
  const person = useMemo(() => ({
    fname: "Bruce",
    lname: "Wayne",
  }), []);

  const handleClick = React.useCallback(
    () => {
      return () => {};
    },
    [],
  )
  
  console.log("ParentFive Render");

  return (
    <div>
      <button onClick={() => setCount((c: number) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("Clio Mobile")}>Change name</button>
      {/* <MemoizedChildFive name={name} person={person}/> */}
      <MemoizedChildFive name={name} handleClick={handleClick}/>
    </div>
  )
}