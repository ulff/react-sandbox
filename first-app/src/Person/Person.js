import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    const style = {
      '@media (min-width: 500px)': {
        width: '250px'
      }
    };

    return (
        <div className="Person" style={style}>
            <p><strong>Name:</strong> {props.name}</p>
            <p><strong>Age:</strong> {props.age}</p>
            <p>{props.children}&nbsp;</p>
            <p onClick={props.click}>Delete</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    )
};

export default Radium(person);
