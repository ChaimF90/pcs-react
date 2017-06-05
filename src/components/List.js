import React from 'react';

export default function List(props) {
    function createRow(person, i) {
        return (
            <li key={i}>{person.firstName}</li>
        )
    }
    return (
        <ul>
            {props.ppl.map((p, i) => createRow(p, i))}
        </ul>
    )
}