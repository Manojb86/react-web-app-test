import React from 'react'

const GoalList = (props) => {
    return (
    <ul className="learn-goals">
       {props.goals.map((goal) => {
           return <li key={goal.id}>{goal.desc}</li>
       })}
    </ul>   
    );
}

export default GoalList;