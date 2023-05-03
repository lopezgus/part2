import React from "react";
import Header from './Header';
import Content from './Content';
import Total from './Total'

const Course = ({course}) => {
    let x = course.parts.map((part) => part.exercises);
    console.log('course total debug', x );
    return (
      <div>
        <Header id= "1" course= {course}/>
        <Content id= "2" partes= {course.parts}/>
        <Total id= "3" exercises= {x}/>
       </div>
    )
  }
export default Course;