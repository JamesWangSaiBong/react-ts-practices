import React from 'react'

type Props = {
  name: string
};

export const ChildTwo = (props: Props) => {
  console.log("ChildTwo Render");

  return (
    <div>ChildTwo component: {props.name}</div>
  )
}

export const MemoizedChildTwo = React.memo(ChildTwo);