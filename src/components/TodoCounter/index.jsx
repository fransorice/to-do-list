import React from 'react'
import { TodoContext } from '../TodoContext';
import './styles.css'

const TodoCounter = () => {
  const {totalTodos, completedTodos} = React.useContext(TodoContext);

  return (
    <h2 className='title'>Has completado <span className='span__completedTodos'>{completedTodos}</span> de <span className='span__totalTodos'>{totalTodos}</span> ToDo's</h2>
  )
}

export { TodoCounter };