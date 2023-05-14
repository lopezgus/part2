import React from 'react'

const Filter = ({ newFilter, handlenewFilter}) => {
  return (
    <>
      <label> filter shown whith: </label> 
      <input value={newFilter} onChange={handlenewFilter}/> 
    </>
  )};

export default Filter