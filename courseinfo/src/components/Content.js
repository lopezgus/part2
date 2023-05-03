import React from 'react';
import Parts from './Parts';

const Content = ({ partes }) => {
  
  return (
    <div>
    
      {partes.map( (part, i) => {
            return ( <Parts key={i} parte={part.name} exercises= {part.exercises} /> )
          }
        )
      }
    
    </div>
  )
}
  export default Content