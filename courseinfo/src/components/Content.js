import React from 'react';
import Parts from './Parts';

const Content = ({ partes }) => {
    console.log("debugg", partes)
  return (
    <div>
    
      {partes.map( (part, i) => {
            console.log("partes-",part);
            console.log("exercises-", part.exercises);
            console.log("Id-",i)
            console.log("name-",part.name)
            return ( <Parts key={i} parte={part.name} exercises= {part.exercises} /> )
          }
        )
      }
    
    </div>
  )
}
  export default Content