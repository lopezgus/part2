import React from "react";

const Total = ({ exercises }) => {

  console.log('Total - exercises', exercises);

  const suma = exercises.reduce((sum, exer) => sum + exer, 0);
  console.log('Total - suma', suma);

  return (
    <p>Number of exercises: {suma}</p>
  );
};

export default Total;
