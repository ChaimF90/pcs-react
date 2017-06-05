import React from 'react';

export default function Form(props) {
    return (
        <form>
            <input
                onChange={props.changeHandler}
                name="firstName"
                value={props.person.firstName}
                type='text'
                placeholder="First Name" />
            <br />
            <input
                onChange={props.changeHandler}
                name="lastName"
                value={props.person.lastName}
                type='text'
                placeholder="Last Name" />
            <br />
            <input
                onChange={props.changeHandler}
                name="age"
                value={props.person.age}
                type='text'
                placeholder="age" />
            <br />
            <button type="button" onClick={props.save}>Save Person</button>
        </form>
    )
}