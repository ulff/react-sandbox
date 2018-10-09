import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Olaf', age: 34 },
      { name: 'Dorota', age: 32 },
      { name: 'Patryk', age: 4 },
      { name: 'Natalia', age: 2 },
    ],
    otherState: 'some other value',
  };

  switchNameHandler = (newName) => {
    this.setState({
        persons: [
          { name: newName, age: 34 },
          { name: 'Dorota', age: 32 },
          { name: 'Trysiu', age: 4 },
          { name: 'Tala', age: 2 },
        ]
    });
  };

  nameChangeHandler = (event) => {
      this.setState({
          persons: [
              { name: 'Olaf', age: 34 },
              { name: event.target.value, age: 32 },
              { name: 'Patryk', age: 4 },
              { name: 'Natalia', age: 2 },
          ],
      });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      color: '#777',
      border: '1px solid #bbb',
      padding: '6px',
      cursor: 'pointer',
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <button
            style={style}
            onClick={ () => this.switchNameHandler('Ulff') }>Switch name</button>
        <div>
          <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age} />
          <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              change={this.nameChangeHandler}/>
          <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
              click={this.switchNameHandler.bind(this, 'Tata')}>
              Przedszkole nr 74</Person>
          <Person
              name={this.state.persons[3].name}
              age={this.state.persons[3].age}
              click={this.switchNameHandler.bind(this, 'Tata')}>
              Sprytne Misie</Person>
        </div>
        <p>{this.state.otherState}</p>
      </div>
    );
    // equivalent to:
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, I\'m a React app!!!'))
  }
}

export default App;
