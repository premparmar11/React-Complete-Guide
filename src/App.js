import React from 'react';
import './App.css';
import Person from './Person/Person';

// JSX code must have 1 parent tag binding whole code
function App() {
  
  return (
    <div className="App">
      <h1>Hello Prem Here.....</h1>
      <p>Good Morning</p>
      <Person />
    </div>
  );

  // ### This is how JSX compiles and converted into like below code
  //  return React.createElement("div", {className : "App"}, React.createElement("h1", null, "Hello Prem here....."));

}

export default App;