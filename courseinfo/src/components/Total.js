import React from "react";

const Total = ({ exercises }) => {
  console.log("Total - exercises", exercises);

  if (!exercises) {
    return null; // o cualquier otra acción que prefieras en caso de que exercises sea undefined o nulo
  }

  const suma = exercises.reduce((sum, exer) => sum + exer, 0);
  console.log("Total - suma", suma);

  return <p>Number of exercises: {suma}</p>;
};

export default Total;
