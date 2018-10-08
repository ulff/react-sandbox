import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="personBox">
            <p><strong>Name:</strong> {props.name} {props.children}</p>
            <p><strong>Age:</strong> {props.age}</p>
        </div>
    )
};

export default person;
