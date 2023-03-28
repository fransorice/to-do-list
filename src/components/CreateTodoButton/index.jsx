import React from 'react'
import { SlPlus } from "react-icons/sl";
import './styles.css'

const CreateTodoButton = (props) => {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };

  return (
    <span
      className='CreateTodoButton'
      onClick={onClickButton}
    ><SlPlus/></span>
  )
}

export {CreateTodoButton}