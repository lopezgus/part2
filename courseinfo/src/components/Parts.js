import React from 'react';

const Parts = ({ parte , exercises }, i) => {
 
  return (
  
    <ul key = {i}>
      <p> {parte}  {exercises} </p>
    </ul>
  
  )
}
export default Parts