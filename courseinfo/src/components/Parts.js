import React from 'react';

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

export default Parts