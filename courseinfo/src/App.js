import React from 'react';
import Total from './components/Total';
import Course from './components/Course';
import './App.css';


const App = () => {
    const course = {
    id: 1,
    name: 'Half Stack application development',
    parts : [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    }
  return (
    <div>
      <Course course={course} />
    </div>
  )
}
export default App

