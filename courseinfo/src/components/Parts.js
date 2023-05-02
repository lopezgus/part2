import React from 'react';

const Parts = ({ parte , exercises }, i) => {
  console.log("parte tavo", parte);
  console.log("exercises tavo", exercises);
  return (
  
   <ul key = {i}>
      <p> {parte}  {exercises} </p>
    </ul>
  
  )
}
export default Parts