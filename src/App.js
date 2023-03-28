import React from 'react';
import './App.css'
import { AppUI } from './components/AppUI/AppUI';
import { TodoProvider } from './components/TodoContext/index';


function App() {
  return (
    <div className='todo__container'>
    <div className='todo__container-div'>
      <TodoProvider>
        <AppUI/>
      </TodoProvider>
    </div>
    </div>
  );
}

export default App;
