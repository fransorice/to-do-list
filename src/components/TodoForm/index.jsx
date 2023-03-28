import React from 'react'
import './styles.css'
import { GrAddCircle } from "react-icons/gr";
import { ImCancelCircle } from "react-icons/im";
import { TodoContext } from '../TodoContext';

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
    <form onSubmit={onSubmit} className="formprueba">
        <label htmlFor="">Ingresa tu TODO:</label>
        <textarea
            value={newTodoValue}
            onChange={onChange}
            placeholder='Ir de compras'
            required
        />
        <div>
            <button
                type='button'
                onClick={onCancel}
                className='cancelTodo'
            >
                <ImCancelCircle/>
            </button>
            <button
                type='submit'
                className='agregarTodo'
            >
                <GrAddCircle/>
            </button>
        </div>
    </form>
  )
}

export {TodoForm}