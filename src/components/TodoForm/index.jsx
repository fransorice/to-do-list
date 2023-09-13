import React from 'react'
import './styles.css'
import { RxCross2 } from "react-icons/rx";
import { TodoContext } from '../TodoContext';
import { AiOutlineCheck } from "react-icons/ai";

const TodoForm = () => {
    const [newTodoValue, setNewTodoValue] = React.useState("");
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    };
    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

  return (
    <form onSubmit={onSubmit} className="form__createTodo">
        <label htmlFor="" className='label__title'>Ingresa tu TODO:</label>
        <textarea
            value={newTodoValue}
            onChange={onChange}
            placeholder='Ir de compras'
            required
        />
        <div className='div__formButtons'>
            <button
                type='button'
                onClick={onCancel}
                className='cancelTodo'
            >
                <RxCross2/>
            </button>
            <button
                type='submit'
                className='addTodo'
            >
                <AiOutlineCheck/>
            </button>
        </div>
    </form>
  )
}

export {TodoForm}