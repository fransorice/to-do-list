import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import Loader from '../Loader';
import EmptyListAnimation from '../EmptyListAnimation';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext)

  return (
    <React.Fragment>
      {loading ? <p><Loader/></p> : 
      <>
      <TodoCounter />
      <TodoSearch />
          <TodoList>
            {error && <p>Hubo un error...</p>}
            {loading && <p><Loader/></p>}
            {(!loading && !searchedTodos.length) && <EmptyListAnimation/>}
            
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
          <CreateTodoButton 
            setOpenModal={setOpenModal}
          />
          </>
          }
      

          {openModal && (
            <Modal>
              <TodoForm/>
            </Modal>
          )}

      
    </React.Fragment>
  );
}

export { AppUI };