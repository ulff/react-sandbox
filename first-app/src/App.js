import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import Radium, { StyleRoot } from 'radium';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { id: 'dasdj', name: 'Olaf', age: 34 },
      { id: 'ytrhh', name: 'Dorota', age: 32 },
      { id: 'revee', name: 'Patryk', age: 4 },
      { id: 'trbrb', name: 'Natalia', age: 2 },
    ],
    otherState: 'some other value',
    showPersons: true,
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.userId === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [ ...this.state.persons ];
    persons[personIndex] = person;

    this.setState({ persons });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons});
  };

  togglePersonsHandler = () => {
    const isShown = this.state.showPersons;
    this.setState({showPersons: !isShown});
  };

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      color: 'white',
      border: '1px solid #bbb',
      padding: '6px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
      }
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              change={(event) => this.nameChangeHandler(event, person.id)} />
            </ErrorBoundary>
          }) }
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>React sandbox</h1>
          <p className={classes.join(' ')}>This is really working</p>
          <button
            style={style}
            onClick={this.togglePersonsHandler}>
              { this.state.showPersons ? 'Hide persons' : 'Show persons' }
          </button>
          { persons }
          <p>{this.state.otherState}</p>
        </div>
      </StyleRoot>
    );
    // equivalent to:
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, I\'m a React app!!!'))
  }
}

export default Radium(App);
