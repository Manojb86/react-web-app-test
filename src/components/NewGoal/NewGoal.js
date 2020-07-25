import React, { useState } from 'react';

import '../NewGoal/NewGoal.css'

const NewGoal = (props) => {
    const [newCourse, setNewCourse] = useState('');

    const newGoalHandler = (event) => {
        event.preventDefault();
        console.log(event);
        const newGoal = {
            id: Math.random().toString(),
            desc: newCourse
        };

        setNewCourse('');
        props.onAddGoal(newGoal);
    };

    const goalInputChangeHandler = (event) => {
        setNewCourse(event.target.value);
    }

    return (
        <form onSubmit={newGoalHandler}>
            <input type="text" value={newCourse} onChange={goalInputChangeHandler}></input>
            <button type="submit">Add Goal</button>
        </form>
    );
}

export default NewGoal;