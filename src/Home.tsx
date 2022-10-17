import React, { useContext, useEffect } from 'react'
import Greeting from './Greeting';
import { UserContext } from './userContext';
import { login } from './util/login';

type Props = {}

const Home = (props: Props) => {
  const { user, setUser} = useContext(UserContext);

  useEffect(() => {
    console.log('Home page rendered');
  });
  

  const userLogin = async () => {
    const user = await login();
    setUser(user);
  };

  return (
    <div>
      <h2>Home</h2>
      <Greeting />
      {
        user
        ? ( <button onClick={() => setUser(null)}>Logout</button> )
        : ( <button onClick={userLogin}>Login</button> )
      }
    </div>
  )
}

export default Home