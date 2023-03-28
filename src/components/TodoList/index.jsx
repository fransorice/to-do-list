import React from 'react'
import './styles.css'

const TodoList = (props) => {
  return (
    <section className='list__section'>
        {props.children}
    </section>
  )
}

export {TodoList}