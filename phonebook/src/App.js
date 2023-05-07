import React, { useState } from 'react'
import './App.css';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const Personas = ({ persona }) => <p> {persona.name}  </p>;
  ;

  const handlenewName = (event) => {
    setNewName (event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.find(pers => pers.name.toLowerCase()===newName.toLowerCase())) {

      alert(` ${newName} is already added to phonebook `);
      setNewName('');
      return;
    }

    const PhoneObject = {
      name: newName
    }
    setPersons (persons.concat(PhoneObject));
    console.log(persons);
    setNewName('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlenewName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <>
        <div>
          {persons.map((person,i) => 
            <Personas key={i} persona={person} />
          )}
        </div>
      </>
{/*
      <div>
        <p> debug NewName: {newName}</p>
        
      </div>
*/}      
    </div>
    
  )
}

export default App
