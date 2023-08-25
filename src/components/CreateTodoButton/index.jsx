import React from 'react'
import { SlPlus } from "react-icons/sl";
import './styles.css'
import CreateTodoButtonSVG from '../CreateTodoButtonSVG';

const CreateTodoButton = (props) => {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };

  return (
    <span
      className='CreateTodoButton'
      onClick={onClickButton}
    ><CreateTodoButtonSVG/></span>
  )
}

export {CreateTodoButton}