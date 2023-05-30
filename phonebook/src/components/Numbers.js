import React from 'react';
import Personas from './personas';

const Numbers = ({newFilter, filterPersons, persons}) => {
    return(!(filterPersons.length===0 && newFilter === '') ? 
    filterPersons.map((person, i) =>{
     return <Personas key={i} persona={person} />}
    ) 
  : 
    persons.map((person, i) =>{
      return <Personas key={i} persona={person} />}
    ))
}







export default Numbers