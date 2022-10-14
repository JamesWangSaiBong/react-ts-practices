import React from 'react'

type Props = {
  name: string;
};

export const ChildFour = ({ name }: Props) => {
  const date = new Date();
  console.log("ChildFour Render");

  return (
    <div>Hello {name}. It is currently {date.getHours()}: {date.getMinutes()}: {' '}{date.getSeconds()}</div>
  )
}

export const MemoizedChildFour = React.memo(ChildFour);