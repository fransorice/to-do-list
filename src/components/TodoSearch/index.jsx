import React from 'react'
import { TodoContext } from '../TodoContext';
import { SlMagnifier } from "react-icons/sl";
import './styles.css'

const TodoSearch = () => {
  const {searchValue, setSearchValue} = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className='input__div'>
      <SlMagnifier/>
      <input 
        placeholder='Busca tu TODO' 
        className='input__div-input'
        value={searchValue}
        onChange={onSearchValueChange}
      />
      <p>{searchValue}</p>
    </div>
  )
}

export {TodoSearch}