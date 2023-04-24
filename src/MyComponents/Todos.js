import React from 'react'
import { TodoItem } from './Todo'

export const Todos = (props) => {
  return (
    <div className='container'>
        <h3 className='text-center my-3'>Todos List</h3>
        <TodoItem todos={props.todos}  onDelete={props.onDelete}/>
        {/* <h4>{props.todos[0]}</h4> */}
    </div>
  )
}
