import React from "react";
import Header from './Header';
import Parts from './Parts';
import Total from './Total'

const Course = ({course}) => {
  const exercices = course.parts.map((part) => part.exercises);
  
  return (

    <div>
      <Header id= "1" course= {course}/>
      <Parts partes= {course.parts}/>
      <Total id= "3" exercises= {exercices}/>
      </div>
  )
}
export default Course;