import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <Person name="Olaf" age="34"/>
        <Person name="Dorota" age="32"/>
        <Person name="Patryk" age="4">aka. Trysiu</Person>
        <Person name="Natalia" age="2">aka. Tala</Person>
      </div>
    );
    // equivalent to:
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, I\'m a React app!!!'))
  }
}

export default App;
