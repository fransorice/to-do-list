import React from 'react'
import { TodoContext } from '../TodoContext';
import './styles.css'

const TodoSearch = () => {
  const {searchValue, setSearchValue} = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <>
    <div class="input__div">
        <input 
          placeholder="Busca tu TODO..." 
          class="input__searchTodo"
          value={searchValue}
          onChange={onSearchValueChange} 
        />
      </div>
      <p>{searchValue}</p>
    </>
  )
}

export {TodoSearch}