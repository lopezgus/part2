import React, { useState } from 'react'
import './App.css';

const App = () => {
  const [persons, setPersons] = useState([
   { name: 'Arto Hellas', number: '040-123456' },
   { name: 'Ada Lovelace', number: '39-44-5323523' },
   { name: 'Dan Abramov', number: '12-43-234345' },
   { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');
  const [filterPersons, setFilterPersons] = useState([]);
  
//debug
  //console.log("debug", persons);

// React Componet
  const Personas = ({ persona }) => {
    return <p> {persona.name}  {persona.number}</p>
  };

  //handler of inputs: names
  const handlenewName = (event) => {
    setNewName(event.target.value);
  }

  //handler of inputs: numbers
  const handlenewNumber = (event) => {
    setNewNumber(event.target.value);
  }

  //handler of filter
  const handlenewFilter = (event) => {
    setFilterPersons( persons.filter(person =>{
//debug
//      console.log('person',person)
      return person.name.toLowerCase().includes(event.target.value.toLocaleLowerCase());
      }))
    setNewFilter(event.target.value);
//debug
//    console.log('filterPerson:'.filterPersons)
  }


  //-----------------------------------
  // add new person to phonebook
  const addPerson = (event) => {
    event.preventDefault()

    if (persons.find(pers => pers.name.toLowerCase() === newName.toLowerCase())) {

      alert(` ${newName} is already added to phonebook `);
      setNewName('');
      setNewNumber('');
      return;
      
    } else if (!newName || !newNumber){
      alert(` Please complete all required fields `);
      setNewName('');
      setNewNumber('');
      return;

    }

    const phoneObject = [
      { name: newName , 
        number: newNumber }
    ]

    setPersons(persons.concat(phoneObject));
    setNewName('');
    setNewNumber('');
    setFilterPersons([]);
    
//Debug
    //console.log("personas", persons)
  }
  // -----------------------------
  
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
      <p>
          filter shown whith: <input value={newFilter} onChange={handlenewFilter} />
      </p>
      <h2>Add a new</h2>
      </div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlenewName} />
        </div>
        <div>
          Number: <input value={newNumber} onChange={handlenewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <>
        <div>
          {!(filterPersons.length===0 && newFilter === '') ? 
              filterPersons.map((person, i) =>{
//debug
//                console.log((filterPersons.length===0 || newFilter === ''))
//                console.log ('length', filterPersons.length)
//                console.log('newFilter:', newFilter)
               return <Personas key={i} persona={person} />}
              ) 
            : 
              persons.map((person, i) =>{
//debug
//                console.log('otro-boolean', !(filterPersons.length===0 && newFilter === ''))
//                console.log ('length-otro', filterPersons.length)
//                console.log('newFilter-otro:', newFilter)                
                return <Personas key={i} persona={person} />}
              ) 
          }
        </div>
      </>
{/* Debug
      <div>
        <p> debug NewName: {newName}</p>
        
      </div>
*/}
    </div>

  )
}

export default App
