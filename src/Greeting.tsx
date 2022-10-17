import React, { useContext, useEffect } from 'react'
import { UserContext } from './userContext'

const GreetingFn = () => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log('Greeting rendered');
  });
  
  return (
    <pre>{JSON.stringify(user, null, 2)}</pre>
  )
}

export default React.memo(GreetingFn);