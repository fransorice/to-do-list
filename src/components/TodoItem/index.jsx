import React from 'react'
import './styles.css'
import { SlCheck, SlMinus } from "react-icons/sl";

const TodoItem = (props) => {
  return (
    <li>
        <span
          className={`iconCheck ${props.completed && 'todoCompleted'}`}
          onClick={props.onComplete}
        ><SlCheck/></span>
        <p className={`${props.completed && 'todoCompleted'}`}>{props.text}</p>
        <span 
          className='removeButton'
          onClick={props.onDelete}
        ><SlMinus/></span>
    </li>
  )
}

export {TodoItem}