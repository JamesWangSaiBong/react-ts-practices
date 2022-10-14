import React from 'react'

type Props = {
  name: string;
  children: JSX.Element | string
};

export const ChildThree = ({ children, name }: Props) => {
  console.log("ChildThree Render");

  return (
    <div>{children}: {name}</div>
  )
}

export const MemoizedChildThree = React.memo(ChildThree);