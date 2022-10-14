import React from 'react';
import { ParentFive } from './components/Optimization/ParentFive';
import { ParentFour } from './components/Optimization/ParentFour';
import { ParentThree } from './components/Optimization/ParentThree';
import { ParentTwo } from './components/Optimization/ParentTwo';
import { UseState } from './components/UseState/UseState';

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <ParentTwo /> */}
      {/* <ParentThree /> */}
      {/* <ParentFour /> */}
      <ParentFive />
    </div>
  );
}

export default App;
