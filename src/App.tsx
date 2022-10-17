import React, { useState, useMemo } from 'react';
import './App.css';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Greeting from './Greeting';
import { UserContext } from './userContext';
import { User } from './types';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>
        <Greeting />
      <UserContext.Provider
        value={providerValue}
        // value={{ user, setUser }}
      >
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
      </UserContext.Provider>
      </Router>
  );
}

export default App;
