import React from "react";

const Total = ({ exercises }) => {

 const suma = exercises.reduce((sum, exer) => sum + exer, 0);
 
  return (
    <p> Number of exercises: {suma}</p>
  );
};

export default Total;
