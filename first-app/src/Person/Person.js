import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p><strong>Name:</strong> {props.name}</p>
            <p><strong>Age:</strong> {props.age}</p>
            <p>{props.children}&nbsp;</p>
            <p onClick={props.click}>Delete</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    )
};

export default person;
