import React, {useState} from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalsList';
import NewGoal from './components/NewGoal/NewGoal';

const App = () => {
const [courseGoals, setcourseGoals] = useState([
  {id: '1', desc: 'Learn React'},
  {id: '2', desc: 'Learn React Native'},
  {id: '3', desc: 'Learn JSX'}
]);

  const addNewGoalHandler = (newGoal) => {
    //setcourseGoals(courseGoals.concat(newGoal));

    setcourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal);
    })
  }

  return (<div>
    <NewGoal onAddGoal = {addNewGoalHandler} />
    <h2>Course Goals</h2>
    <GoalList goals= {courseGoals}/>
  </div>);
}

export default App;
