import React from 'react'
import './styles.css'
import DeleteTodoButtonSVG from '../DeleteTodoButtonSVG';
import CompleteTodoButtonSVG from '../CompleteTodoButtonSVG';

const TodoItem = (props) => {
  return (
    <li>
        <span
          className={`iconCheck ${props.completed && 'todoCompleted'}`}
          onClick={props.onComplete}
        ><CompleteTodoButtonSVG/></span>
        <p className={`${props.completed && 'todoCompleted'}`}>{props.text}</p>
        <span 
          className='removeButton'
          onClick={props.onDelete}
        ><DeleteTodoButtonSVG/></span>
    </li>
  )
}

export {TodoItem}