import React from 'react'
import { TodoContext } from '../TodoContext';
import './styles.css'

const TodoCounter = () => {
  const {totalTodos, completedTodos} = React.useContext(TodoContext);

  return (
    <h2 className='title'>Has completado {completedTodos} de {totalTodos} ToDo's</h2>
  )
}

export { TodoCounter };