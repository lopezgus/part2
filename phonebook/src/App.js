import React, { useState } from 'react';
import './App.css';
//import Personas from './components/personas';
import Filter from './components/filter';
import Numbers from './components/Numbers';

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
      return person.name.toLowerCase().includes(event.target.value.toLocaleLowerCase());
      }))
    setNewFilter(event.target.value);
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
    
  }
  // -----------------------------
  
  return (
    <div>
      <h2>Phonebook</h2>
      <p>
        <Filter newFilter={newFilter} handlenewFilter={handlenewFilter} />
      </p>  
      <div>
        <h2>Add a new</h2>
      </div>
      <form onSubmit={addPerson}>
        <div>
          <label> name: </label> 
          <input value={newName} onChange={handlenewName} />
        </div>
        <div>
          <label> Number: </label> 
          <input value={newNumber} onChange={handlenewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <>
        <div>
          < Numbers newFilter={newFilter} filterPersons={filterPersons} persons={persons} />
        </div>
      </>
    </div>
  )
}

export default App
