import React, { useState } from 'react'
import './App.css';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
//    { name: 'Ada Lovelace', number: '39-44-5323523' },
//    { name: 'Dan Abramov', number: '12-43-234345' },
//    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

//debug
//  console.log("debug", persons);
  // React Componet
  const Personas = ({ persona }) => {
//    console.log(persona);
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

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.find(pers => pers.name.toLowerCase() === newName.toLowerCase())) {

      alert(` ${newName} is already added to phonebook `);
      setNewName('');
      setNewNumber('');
      return;
    }

    const PhoneObject = [
      { name: newName , 
        number: newNumber }
    ]
    setPersons(persons.concat(PhoneObject));
//    console.log(persons);
    setNewName('');
    setNewNumber('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
          {persons.map((person, i) =>
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
