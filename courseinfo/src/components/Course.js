import React from "react";

const Course = ({course}) => {
  

const Header = ({ course }) => {
    return <h1> {course.name}</h1>
}

const Total = ({ exercises }) => {

  const suma = exercises.reduce((sum, exer) => sum + exer, 0);
  
   return (
     <p> Number of exercises: {suma}</p>
   );
 };

 const Parts = ({ partes }) => {
  
  return ( 
    <div>
      {partes.map( (part, i) => {
        return (
          <div key={i}>
            <p> {part.name}  {part.exercises} </p>
          </div>
        )
      })}
    </div>
  );  
};
  
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