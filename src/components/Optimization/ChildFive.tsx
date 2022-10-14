import React from 'react'

type Props = {
  name: string;
  person?: {
    fname: string;
    lname: string;
  };
  handleClick?: () => void;
};

export const ChildFive = ({ name, person }: Props) => {
  console.log("ChildFive Render");

  return (
    <div>Hello {name}. {person?.fname} {person?.lname}</div>
  )
}

export const MemoizedChildFive = React.memo(ChildFive);