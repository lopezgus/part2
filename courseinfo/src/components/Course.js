import React from "react";
import Header from './Header';
import Content from './Content';
const Course = ({course}) => {
    console.log(course);
    return (
      <div>
        <Header id= "1" course={course}/>
        <Content id= "2" partes={course.parts}/>
       </div>
    )
  }
export default Course;